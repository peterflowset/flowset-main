import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Manrope } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from "@/lib/navigation";
import { notFound } from "next/navigation";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "KI Agentur Südtirol | flowset | Automatisierung & Digitalisierung",
  description: "Wir machen Südtiroler Unternehmen zukunftsfähig. flowset automatisiert Prozesse und steigert Effizienz mit modernster KI.",
  keywords: ["KI Agentur", "Südtirol", "Automatisierung", "Digitalisierung", "flowset"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as "de" | "it")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
