import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { LanguageProvider } from '@/context/LanguageContext';

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

// Enhanced metadata for CHUI Batteries
export const metadata: Metadata = {
  title: "CHUI Batteries | German Technology Batteries in Tanzania",
  description: "CHUI delivers reliable, maintenance-free batteries with German technology for all your power needs. Built to withstand Tanzania's challenging climate conditions. Trusted nationwide for automotive, industrial, and backup power solutions.",
  keywords: [
    "CHUI batteries",
    "German technology batteries",
    "maintenance-free batteries Tanzania",
    "car batteries Tanzania",
    "automotive batteries",
    "industrial batteries",
    "backup power Tanzania",
    "reliable batteries",
    "betri Tanzania",
    "German batteries Africa"
  ],
  authors: [{ name: "CHUI Batteries" }],
  creator: "CHUI Batteries",
  publisher: "CHUI Batteries",
  metadataBase: new URL('https://chuibatteries.com'), // Update with actual domain
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_TZ",
    alternateLocale: ["sw_TZ"],
    url: "https://chuibatteries.com",
    siteName: "CHUI Batteries",
    title: "CHUI Batteries | German Technology Power Solutions",
    description: "Powering your journey with German technology. Reliable, maintenance-free batteries built for Tanzania's climate.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "CHUI Batteries - German Technology",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "CHUI Batteries | German Technology Power Solutions",
    description: "Reliable, maintenance-free batteries with German technology for Tanzania.",
    images: ["/twitter-image.jpg"], // Add your Twitter image
    creator: "@chuibatteries", // Update with actual handle
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Geographic targeting
  other: {
    "geo.region": "TZ",
    "geo.placename": "Tanzania",
    "geo.position": "-6.792354;39.208328", // Dar es Salaam coordinates
  },

  // Verification tags (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // App links
  alternates: {
    canonical: "https://chuibatteries.com",
    languages: {
      'en': 'https://chuibatteries.com/en',
      'sw': 'https://chuibatteries.com/sw',
    },
  },

  // Category
  category: "Automotive & Industrial Batteries",
};

// Font configurations with better bold weights
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Montserrat for headings - excellent bold weights
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Poppins as alternative - great for display text
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${montserrat.variable} ${poppins.variable} bg-white text-black`}
    >
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/n50mf.jpeg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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