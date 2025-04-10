import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { LanguageProvider } from '@/context/LanguageContext';

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

// You can manually write your static metadata here or leave it dynamic if needed
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description goes here.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <LanguageProvider>
          <section className="min-h-screen">
            <Toaster />
            <Header />
            <main>{children}</main>
            <Footer />
          </section>
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
