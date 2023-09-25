const sitemap = require('sitemap');
const hostname = 'https://www.sensafoods.co.in';

const urls = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/dashboard', changefreq: 'daily', priority: 1 },
    { url: '/products', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = sitemap.createSitemap({
    hostname,
    urls,
});

const fs = require('fs');

fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());