import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Eco Clinic">
      <Image
        src="/images/logo.png"
        alt="Eco Clinic"
        width={220}
        height={44}
        className="h-9 w-auto md:h-10"
        priority
      />
    </Link>
  );
}
