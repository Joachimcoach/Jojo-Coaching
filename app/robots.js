// Autorise Google à lire tout le site et lui indique le sitemap (accessible à /robots.txt)
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.joachimcoaching.be/sitemap.xml',
  };
}
