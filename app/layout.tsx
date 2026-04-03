import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  siteUrl,
  siteName,
  siteTitle,
  siteDescription,
  siteAddress,
  siteSocial,
} from "@/lib/site";
import "./globals.css";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Optamax",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "refinery operating system",
    "refinery optimization",
    "decision intelligence",
    "downstream optimization",
    "hydrocarbon value chain",
    "LP model review",
    "gross margin improvement",
    "feedstock optimization",
    "refinery AI",
    "energy AI platform",
    "operational excellence",
    "hydrocarbon accounting",
    "blending optimization",
    "Optamax",
    "refinery planning",
    "constraint management",
    "value chain transformation",
    "production planning",
    "refinery performance",
    "energy advisory",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    // next/og file convention generates /opengraph-image automatically;
    // no manual images array needed — Next 15 picks it up.
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: siteSocial.twitter,
    site: siteSocial.twitter,
    // next/og file convention generates /twitter-image automatically.
  },

  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-icon.png",
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },

  category: "Technology",

  // Geo meta tags for geographic targeting
  other: {
    "geo.region": `${siteAddress.country}-${siteAddress.region}`,
    "geo.placename": siteAddress.city,
    "geo.position": `${siteAddress.latitude};${siteAddress.longitude}`,
    ICBM: `${siteAddress.latitude}, ${siteAddress.longitude}`,
    ...(googleVerification
      ? { "google-site-verification": googleVerification }
      : {}),
    ...(bingVerification
      ? { "msvalidate.01": bingVerification }
      : {}),
  },

  // manifest.ts is picked up automatically by Next via file convention
  manifest: "/manifest.webmanifest",

  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[#f7f8fa] text-navy-900`}
      >
        {children}
      </body>
    </html>
  );
}
