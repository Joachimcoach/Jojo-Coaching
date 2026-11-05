// Liste des pages du site, pour Google (accessible à /sitemap.xml)
const URL_SITE = 'https://www.joachimcoaching.be';

export default function sitemap() {
  return [
    { url: `${URL_SITE}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${URL_SITE}/course`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL_SITE}/velo`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
