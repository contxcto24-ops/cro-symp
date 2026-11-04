import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dominio centralizado: lee directamente de src/config/site.ts para editarse en un solo sitio
let BASE_URL = 'https://crochetsimply.online';
try {
  const siteConfigRaw = fs.readFileSync(path.resolve(__dirname, '../src/config/site.ts'), 'utf-8');
  const match = siteConfigRaw.match(/DEFAULT_SITE_DOMAIN\s*=\s*['"]([^'"]+)['"]/);
  if (match && match[1]) {
    BASE_URL = match[1].replace(/\/+$/, '');
  }
} catch (e) {
  // Fallback
}
if (process.env.VITE_SITE_URL) {
  BASE_URL = process.env.VITE_SITE_URL.replace(/\/$/, '');
}

const STATIC_ROUTES = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: 'blog', changefreq: 'daily', priority: '0.9' },
  { path: 'glosario', changefreq: 'monthly', priority: '0.8' },
  { path: 'quienes-somos', changefreq: 'monthly', priority: '0.7' },
  { path: 'contacto', changefreq: 'monthly', priority: '0.6' },
  { path: 'politica-de-privacidad', changefreq: 'yearly', priority: '0.3' },
  { path: 'politica-de-cookies', changefreq: 'yearly', priority: '0.3' },
  { path: 'aviso-legal', changefreq: 'yearly', priority: '0.3' }
];

// Slugs of articles
const ARTICLE_SLUGS = [
  { slug: 'como-empezar-crochet-guia-principiantes', lastmod: '2026-11-04', priority: '0.9' },
  { slug: 'materiales-basicos-crochet-primera-vez', lastmod: '2026-11-04', priority: '0.9' },
  { slug: 'elegir-lana-ganchillo-adecuados-proyecto', lastmod: '2026-11-04', priority: '0.9' },
  { slug: 'como-sostener-ganchillo-lana-paso-a-paso', lastmod: '2026-11-04', priority: '0.9' },
  { slug: 'nudo-corredizo-cadeneta-primer-paso-crochet', lastmod: '2026-11-04', priority: '0.9' },
  { slug: 'primer-amigurumi-osito-paso-a-paso', lastmod: '2026-10-18', priority: '0.8' },
  { slug: 'top-verano-crochet-brisa-patron-gratis', lastmod: '2026-10-24', priority: '0.8' },
  { slug: 'mejores-tipos-hilo-crochet-ganchillo', lastmod: '2026-11-02', priority: '0.8' }
];

const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  const xmlUrls = [];

  // Static routes
  STATIC_ROUTES.forEach((route) => {
    const loc = route.path ? `${BASE_URL}/${route.path}` : BASE_URL;
    xmlUrls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
  });

  // Articles
  ARTICLE_SLUGS.forEach((art) => {
    xmlUrls.push(`  <url>
    <loc>${BASE_URL}/blog/${art.slug}</loc>
    <lastmod>${art.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${art.priority}</priority>
  </url>`);
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlUrls.join('\n')}
</urlset>`;
}

function generateRobots() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
`;
}

// Ensure public directory exists
const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write files
const sitemapContent = generateSitemap();
const robotsContent = generateRobots();

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf-8');

console.log('Successfully generated public/sitemap.xml and public/robots.txt with BASE_URL:', BASE_URL);
