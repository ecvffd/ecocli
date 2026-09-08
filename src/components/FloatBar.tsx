import { clinic } from "@/data/clinic";

export function FloatBar() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2">
      <a
        href={clinic.socials.telegram}
        className="grid h-12 w-12 place-items-center rounded-full bg-[#2AABEE] text-white shadow-lg"
        aria-label="Telegram"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M21.5 3.4 18.4 20c-.2 1-1.2 1.4-2 .9l-5.5-4.1-2.6 2.5c-.3.3-.8.1-.9-.3l-.4-4.8L18 6.2c.3-.3 0-.5-.4-.2L6.7 13.3 2.2 11.8c-1-.3-1-1.2.2-1.8L20 2.6c.9-.4 1.7.2 1.5.8Z" />
        </svg>
      </a>
      <a
        href={clinic.socials.whatsapp}
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12.04 2C6.5 2 2 6.37 2 11.78c0 1.73.46 3.41 1.34 4.9L2 22l5.5-1.44a10.2 10.2 0 0 0 4.54 1.08h.04c5.54 0 10.04-4.37 10.04-9.78C22.12 6.37 17.58 2 12.04 2Zm5.83 13.87c-.25.7-1.45 1.29-2.02 1.37-.52.07-1.18.1-1.91-.12-.44-.13-.99-.32-1.7-.63-3-1.3-4.95-4.33-5.1-4.53-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.59-.36.79-.36h.57c.18 0 .42-.07.66.5.25.6.85 2.07.92 2.22.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.54.3.15.48.13.66-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.08.13.08.73-.17 1.43Z" />
        </svg>
      </a>
    </div>
  );
}
