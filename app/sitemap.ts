export default async function sitemap() {
  let routes = ['', '/about'].map((route) => ({
    url: `https://music.dabaz.me${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}