import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://layer-0.web'), // Replace with actual domain when ready
  title: {
    default: "LAYER 0 — The Essential Blueprint",
    template: "%s | LAYER 0",
  },
  description: "High-end D2C Agency. We translate the invisible essence of your brand into a precise architectural structure.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://layer-0.web',
    siteName: 'LAYER 0',
    title: 'LAYER 0 — The Essential Blueprint',
    description: 'High-end D2C Agency specializing in brand architecture and digital products.',
    images: [
      {
        url: '/og-image.png', // Placeholder for future asset
        width: 1200,
        height: 630,
        alt: 'LAYER 0 Blueprint',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAYER 0 — The Essential Blueprint',
    description: 'High-end D2C Agency specializing in brand architecture and digital products.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
