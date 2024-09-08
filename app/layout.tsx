import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@dabaz/lib/utils';

import './globals.css';
import { Navbar } from '@dabaz/components/layout/Navbar';
import DynamicThemeColor from '@dabaz/components/utils/DynamicThemeColor';
import { PlayerProvider } from '@dabaz/providers/PlayerProvider';
import AudioPlayer from '@dabaz/components/player/AudioPlayer';
import PlayerWrapper from '@dabaz/components/player/PlayerWrapper';

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
  themeColor: '#ffffff',
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
  appleWebApp: {
    title: 'DabMusic',
    capable: false,
    statusBarStyle: 'black-translucent',
    startupImage: [
      // iPhone 14 Pro Max
      {
        url: '/images/apple/splash-1290x2796-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1290x2796-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      // iPhone 14 Pro
      {
        url: '/images/apple/splash-1179x2556-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1179x2556-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      // iPhone 13 Pro, 13, 12 Pro, 12
      {
        url: '/images/apple/splash-1170x2532-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1170x2532-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      // iPhone 12 Pro Max
      {
        url: '/images/apple/splash-1284x2778-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1284x2778-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      // iPhone X, XS, 11 Pro
      {
        url: '/images/apple/splash-1125x2436-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1125x2436-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      // iPhone XR, 11
      {
        url: '/images/apple/splash-828x1792-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-828x1792-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      // iPhone XS Max, 11 Pro Max
      {
        url: '/images/apple/splash-1242x2688-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1242x2688-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      // iPhone 8, SE 2020
      {
        url: '/images/apple/splash-750x1334-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-750x1334-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      // iPhone 8 Plus
      {
        url: '/images/apple/splash-1242x2208-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1242x2208-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
      },
      // iPad Pro 12.9"
      {
        url: '/images/apple/splash-2048x2732-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-2048x2732-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      // iPad Pro 11"
      {
        url: '/images/apple/splash-1668x2388-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1668x2388-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      // iPad Air 10.9"
      {
        url: '/images/apple/splash-1640x2360-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1640x2360-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      // iPad Mini, iPad Air 9.7", iPad Pro 9.7"
      {
        url: '/images/apple/splash-1536x2048-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1536x2048-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      // iPad 10.2"
      {
        url: '/images/apple/splash-1620x2160-light.jpg',
        media: '(prefers-color-scheme: light) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple/splash-1620x2160-dark.jpg',
        media: '(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#262626' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('h-full antialiased overflow-hidden select-none', inter.className)}
    >
      <body className='bg-white dark:bg-black text-black dark:text-white'>
        <PlayerProvider>
          <Navbar>
            <DynamicThemeColor />
            {children}
            <PlayerWrapper />
          </Navbar>
        </PlayerProvider>
      </body>
    </html>
  );
}
