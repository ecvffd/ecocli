import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatBar } from "@/components/FloatBar";
import { clinic } from "@/data/clinic";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Eco Clinic — центр косметологии в Екатеринбурге",
    template: "%s · Eco Clinic",
  },
  description:
    "Клиника косметологии Eco Clinic в Екатеринбурге на Татищева, 47А. Инъекции, лазер, SMAS-лифтинг Liftera, BBL, уходы. Экологичность, естественность, безопасность.",
  icons: {
    icon: "/images/logo-mark.png",
    apple: "/images/logo-mark.png",
  },
  openGraph: {
    title: "Eco Clinic — экология красоты",
    description: clinic.tagline,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatBar />
      </body>
    </html>
  );
}
