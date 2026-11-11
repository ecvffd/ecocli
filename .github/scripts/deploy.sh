#!/usr/bin/env bash
set -euo pipefail

archive=${1:?Missing source archive}
release=${2:?Missing release identifier}
[[ "$release" =~ ^[0-9a-f]{40}-[0-9]+-[0-9]+$ ]]

app_dir=/var/www/ecoclinic
releases="$app_dir/releases"
current="$app_dir/current"
candidate="$releases/$release"
next_link="$app_dir/.current-$release"
service=ecoclinic.service
deploy_user=$(id -un)
[[ "$deploy_user" != root ]]
[[ "$(systemctl show --property=User --value "$service")" == "$deploy_user" ]]
[[ "$(systemctl show --property=WorkingDirectory --value "$service")" == "$current" ]]

exec 9>"$app_dir/.deploy.lock"
flock -n 9
[[ -L "$current" && -d "$current" ]]
previous=$(readlink -- "$current")
mkdir -p -- "$releases"
mkdir -- "$candidate"

switch_release() {
  ln -s -- "$1" "$next_link"
  mv -Tf -- "$next_link" "$current"
}

wait_for_site() {
  local attempt status
  for ((attempt = 1; attempt <= 20; attempt++)); do
    if systemctl is-active --quiet "$service" &&
      status=$(curl --silent --output /dev/null --write-out '%{http_code}' \
        --max-time 3 --header 'Host: ecoclinic.pro' http://127.0.0.1:3000/) &&
      [[ "$status" == 200 ]]; then
      return 0
    fi
    sleep 2
  done
  return 1
}

promoting=false
cleanup() {
  local status=$?
  trap - EXIT
  rm -f -- "$next_link"
  if ((status == 0)); then
    return
  fi
  if [[ "$promoting" == true ]]; then
    echo 'Deployment failed. Restoring the previous release.' >&2
    if ! switch_release "$previous" ||
      ! sudo -n /usr/bin/systemctl restart "$service" || ! wait_for_site; then
      echo 'Rollback could not be verified. Check the service on the server.' >&2
      exit "$status"
    fi
  fi
  rm -rf -- "$candidate"
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

tar -xzf "$archive" -C "$candidate"
for env_file in .env .env.local .env.production .env.production.local; do
  if [[ -f "$app_dir/$env_file" ]]; then
    ln -s -- "$app_dir/$env_file" "$candidate/$env_file"
  fi
done
cd "$candidate"
npm ci --include=dev
npm run build

promoting=true
switch_release "$candidate"
sudo -n /usr/bin/systemctl restart "$service"
wait_for_site
echo "Release $release is serving HTTP 200."
