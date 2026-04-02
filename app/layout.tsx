import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = "https://ai.r2egroup.com";
const siteName = "R2E AI";
const siteTitle = "R2E AI | The Energy Operating System";
const siteDescription =
  "AI-powered decision intelligence for downstream refinery operations. R2E Group converts 20+ years of elite energy advisory expertise into an on-demand operating system — delivering billions in margin lift across clients worldwide.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | R2E AI",
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
    "R2E Group",
    "refinery planning",
    "constraint management",
    "value chain transformation",
    "production planning",
    "refinery performance",
    "energy advisory",
  ],

  authors: [{ name: "R2E Group", url: "https://r2egroup.com" }],
  creator: "R2E Group",
  publisher: "R2E Group",

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
    images: [
      {
        url: `${siteUrl}/r2e-group-logo.png`,
        width: 937,
        height: 546,
        alt: "R2E AI - The Energy Operating System",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/r2e-group-logo.png`],
    creator: "@R2EGroup",
    site: "@R2EGroup",
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
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-white text-navy-900`}
      >
        {children}
      </body>
    </html>
  );
}
