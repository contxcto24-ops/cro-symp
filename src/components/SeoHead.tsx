import { useEffect } from 'react';
import { SITE_DOMAIN, SITE_NAME } from '../config/site';

export interface BreadcrumbJsonLdItem {
  name: string;
  url: string;
}

export interface ArticleJsonLdProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorJobTitle?: string;
  category?: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbJsonLdItem[];
  articleData?: ArticleJsonLdProps;
}

export function SeoHead({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  image,
  imageAlt,
  breadcrumbs,
  articleData
}: SeoHeadProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Use single centralized production domain for canonicals and SEO tags
    const targetPath = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '');
    const cleanSubPath = (targetPath === '/' || !targetPath)
      ? ''
      : `/${targetPath.replace(/^\/+|\/+$/g, '')}`;
    const canonicalUrl = `${SITE_DOMAIN}${cleanSubPath}`;

    const defaultImage = `${SITE_DOMAIN}/src/assets/images/hero_crochet_table_1793792197109.webp`;
    const activeImage = image
      ? (image.startsWith('http') ? image : `${SITE_DOMAIN}/${image.replace(/^\/+/, '')}`)
      : defaultImage;

    // Helper to set or update meta tags
    const setMetaTag = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard SEO Meta
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // OpenGraph
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'es_ES');
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', activeImage);

    if (imageAlt) {
      setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', imageAlt);
      setMetaTag('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', imageAlt);
    }

    if (type === 'article') {
      if (publishedTime) {
        setMetaTag('meta[property="article:published_time"]', 'property', 'article:published_time', publishedTime);
      }
      if (modifiedTime || publishedTime) {
        setMetaTag('meta[property="article:modified_time"]', 'property', 'article:modified_time', modifiedTime || publishedTime!);
      }
      if (section) {
        setMetaTag('meta[property="article:section"]', 'property', 'article:section', section);
      }
    }

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', activeImage);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 2. Structured Data: WebSite Schema (always present)
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': SITE_NAME,
      'url': SITE_DOMAIN,
      'description': 'Patrones gratis de crochet, tutoriales de amigurumis y ropa a ganchillo para principiantes.',
      'inLanguage': 'es-ES',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${SITE_DOMAIN}/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    // 3. Structured Data: BreadcrumbList (present on all pages)
    const breadcrumbItems = breadcrumbs || [
      { name: 'Inicio', url: '/' },
      { name: title.split('–')[0].trim(), url: canonicalUrl }
    ];

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems.map((item, idx) => {
        let fullItemUrl = item.url;
        if (!fullItemUrl.startsWith('http')) {
          const sub = (fullItemUrl === '/' || !fullItemUrl) ? '' : `/${fullItemUrl.replace(/^\/+|\/+$/g, '')}`;
          fullItemUrl = `${SITE_DOMAIN}${sub}`;
        } else {
          fullItemUrl = fullItemUrl.replace(/\/+$/, '') || fullItemUrl;
        }
        return {
          '@type': 'ListItem',
          'position': idx + 1,
          'name': item.name,
          'item': fullItemUrl
        };
      })
    };

    // 4. Structured Data: Article Schema (on articles)
    let articleSchema: object | null = null;
    if (type === 'article' && articleData) {
      articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': articleData.headline,
        'description': articleData.description,
        'image': [activeImage],
        'datePublished': articleData.datePublished,
        'dateModified': articleData.dateModified || articleData.datePublished,
        'inLanguage': 'es-ES',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        'author': {
          '@type': 'Person',
          'name': articleData.authorName,
          'jobTitle': articleData.authorJobTitle || 'Diseñadora de Crochet'
        },
        'publisher': {
          '@type': 'Organization',
          'name': SITE_NAME,
          'logo': {
            '@type': 'ImageObject',
            'url': `${SITE_DOMAIN}/src/assets/images/hero_crochet_table_1793792197109-640w.webp`
          }
        },
        'articleSection': articleData.category || 'Crochet'
      };
    }

    // Embed JSON-LD scripts dynamically
    const updateJsonLdScript = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    updateJsonLdScript('schema-website', websiteSchema);
    updateJsonLdScript('schema-breadcrumbs', breadcrumbSchema);

    const articleScript = document.getElementById('schema-article');
    if (articleSchema) {
      updateJsonLdScript('schema-article', articleSchema);
    } else if (articleScript) {
      articleScript.remove();
    }

    return () => {
      // Clean up article schema when leaving
      const script = document.getElementById('schema-article');
      if (script) script.remove();
    };
  }, [
    title,
    description,
    canonicalPath,
    type,
    publishedTime,
    modifiedTime,
    section,
    image,
    imageAlt,
    breadcrumbs,
    articleData
  ]);

  return null;
}
