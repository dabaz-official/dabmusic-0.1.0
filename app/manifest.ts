import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DabMusic',
    short_name: 'DabMusic',
    description: 'A music streaming platform developed by DabAZ.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/images/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
