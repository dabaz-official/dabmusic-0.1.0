import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://music.dabaz.me'),
  title: {
    default: 'DabMusic',
    template: '%s | DabMusic',
  },
  description: 'A music streaming platform developed by DabAZ.',
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#FE2401',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DabMusic',
  },
  openGraph: {
    title: 'DabMusic',
    description: 'A music streaming platform developed by DabAZ.',
    url: 'https://music.dabaz.me',
    siteName: 'DabMusic',
    locale: 'en_US',
    type: 'website',
  },
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
  twitter: {
    title: 'DabMusic',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
