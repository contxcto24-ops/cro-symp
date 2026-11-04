import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ARTICLES } from '../src/data/articles';
import { DEFAULT_SITE_DOMAIN } from '../src/config/site';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = DEFAULT_SITE_DOMAIN.replace(/\/+$/, '');

const STATIC_ROUTES = [
  { path: '', title: 'Patrones de crochet y tutoriales fáciles | crochetsimply', description: 'Aprende crochet paso a paso con patrones gratis de amigurumis, ropa a ganchillo y guías de lanas para principiantes y tejedoras.' },
  { path: 'blog', title: 'Blog de crochet: patrones y tutoriales | crochetsimply', description: 'Explora todos nuestros patrones de crochet en español, tutoriales paso a paso para amigurumis y prendas de ganchillo.' },
  { path: 'glosario', title: 'Glosario de puntos y abreviaturas | crochetsimply', description: 'Guía completa de abreviaturas y símbolos de ganchillo: cad, pb, pa, aum, dism y más explicados paso a paso.' },
  { path: 'quienes-somos', title: 'Quiénes somos y nuestra historia | crochetsimply', description: 'Conoce a Clara y Sofía, las tejedoras detrás de crochetsimply. Nuestra filosofía slow craft y amor por el ganchillo.' },
  { path: 'contacto', title: 'Contacto y dudas de crochet | crochetsimply', description: '¿Tienes dudas sobre algún patrón o sugerencia? Escríbenos y te responderemos encantadas lo antes posible.' },
  { path: 'politica-de-privacidad', title: 'Política de privacidad | crochetsimply', description: 'Información sobre protección de datos y privacidad en crochetsimply conforme a la normativa vigente.' },
  { path: 'politica-de-cookies', title: 'Política de cookies | crochetsimply', description: 'Información sobre el uso de cookies y tecnologías de seguimiento en nuestro sitio web crochetsimply.' },
  { path: 'aviso-legal', title: 'Aviso legal y condiciones | crochetsimply', description: 'Información legal, datos identificativos y condiciones de uso del sitio web crochetsimply.' }
];

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

function setMetaProperty(html: string, property: string, content: string): string {
  const regex = new RegExp(`<meta\\s+property="${property}"\\s+content=".*?"\\s*\\/?>`, 'i');
  const tag = `<meta property="${property}" content="${content}" />`;
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function setMetaName(html: string, name: string, content: string): string {
  const regex = new RegExp(`<meta\\s+name="${name}"\\s+content=".*?"\\s*\\/?>`, 'i');
  const tag = `<meta name="${name}" content="${content}" />`;
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function writePage(routePath: string, title: string, description: string, imageUrl: string = '', imageAlt: string = '') {
  const cleanPath = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  const dir = cleanPath ? path.join(distDir, cleanPath) : distDir;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const canonical = cleanPath ? `${BASE_URL}/${cleanPath}` : `${BASE_URL}/`;
  const defaultImg = `${BASE_URL}/assets/images/hero_crochet_table_1793792197109.webp`;

  let img = defaultImg;
  if (imageUrl) {
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      img = imageUrl.replace(/^http:\/\//, 'https://');
    } else {
      let cleanImg = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
      if (!cleanImg.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i)) {
        cleanImg += '.jpg';
      }
      img = `${BASE_URL}${cleanImg}`;
    }
  }

  let html = template;

  // 1. Ensure lang="es" on <html>
  if (!html.includes('lang="es"')) {
    html = html.replace(/<html(\s|>)/, '<html lang="es"$1');
  }

  // 2. Title & Description
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = setMetaName(html, 'description', description);

  // 3. OpenGraph Tags
  html = setMetaProperty(html, 'og:title', title);
  html = setMetaProperty(html, 'og:description', description);
  html = setMetaProperty(html, 'og:url', canonical);
  html = setMetaProperty(html, 'og:locale', 'es_ES');
  html = setMetaProperty(html, 'og:image', img);
  html = setMetaProperty(html, 'og:image:width', '1200');
  html = setMetaProperty(html, 'og:image:height', '630');

  // 4. Twitter Card Tags
  html = setMetaName(html, 'twitter:card', 'summary_large_image');
  html = setMetaName(html, 'twitter:title', title);
  html = setMetaName(html, 'twitter:description', description);
  html = setMetaName(html, 'twitter:image', img);

  // 5. Canonical Link
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
  }

  const filePath = path.join(dir, 'index.html');
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`Prerendered SSG HTML: /${cleanPath || ''}`);
}

// 1. Prerender static routes
STATIC_ROUTES.forEach((route) => {
  writePage(route.path, route.title, route.description);
});

// 2. Prerender all articles
ARTICLES.forEach((article) => {
  writePage(
    `blog/${article.slug}`,
    article.metaTitle || article.title,
    article.metaDescription || article.excerpt,
    article.heroImage,
    article.imageAlt
  );
});

// 3. Prerender 404 page
writePage(
  '404',
  'Página no encontrada (Error 404) | crochetsimply',
  'Lo sentimos, no hemos podido encontrar la página que buscas. Explora nuestros patrones de crochet gratuitos.'
);
const generated404Path = path.join(distDir, '404/index.html');
const notFoundPath = path.join(distDir, '404.html');
if (fs.existsSync(generated404Path)) {
  fs.copyFileSync(generated404Path, notFoundPath);
}
console.log('Prerendered SSG HTML: /404.html');

console.log(`Successfully prerendered static HTML pages with full SEO metadata.`);
