import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DabMusic',
    short_name: 'DabMusic',
    description: 'A music streaming platform developed by DabAZ.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#FE2401',
    icons: [
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}