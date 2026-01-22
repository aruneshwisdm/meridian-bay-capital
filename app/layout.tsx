import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { META, COMPANY } from "@/lib/constants";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(META.siteUrl),
  title: {
    default: META.defaultTitle,
    template: `%s | ${META.siteName}`,
  },
  description: META.defaultDescription,
  keywords: [...META.keywords],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: META.siteUrl,
    siteName: META.siteName,
    title: META.defaultTitle,
    description: META.defaultDescription,
    images: [
      {
        url: META.ogImage,
        width: 1200,
        height: 630,
        alt: META.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.defaultTitle,
    description: META.defaultDescription,
    site: META.twitterHandle,
    creator: META.twitterHandle,
    images: [META.ogImage],
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A2463",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen bg-background text-text font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
