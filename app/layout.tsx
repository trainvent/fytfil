import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://fytfil.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fytfil – The Vegan Social Platform",
  description:
    "Fytfil is the social platform built for vegans. Share your journey, discover plant-based recipes, connect with a like-minded community, and advocate for a kinder world.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Fytfil",
    title: "Fytfil – The Vegan Social Platform",
    description:
      "Fytfil is the social platform built for vegans. Share your journey, discover plant-based recipes, connect with a like-minded community, and advocate for a kinder world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fytfil – The Vegan Social Platform",
    description:
      "Fytfil is the social platform built for vegans. Share your journey, discover plant-based recipes, connect with a like-minded community, and advocate for a kinder world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
