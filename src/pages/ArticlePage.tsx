import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Printer,
  Share2,
  Check,
  CheckSquare,
  Square,
  ArrowLeft,
  Lightbulb,
  MessageSquare,
  Send,
  BookmarkCheck,
  Copy,
  Camera,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  Sparkles,
  Scissors,
  Gauge,
  ExternalLink
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { Comment } from '../types';
import { SeoHead } from '../components/SeoHead';
import { AdSlot } from '../components/AdSlot';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { SocialShareBar } from '../components/SocialShareBar';
import { NewsletterBox } from '../components/NewsletterBox';
import { BackToTop } from '../components/BackToTop';

interface ArticlePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

const KNOWN_STATIC_ROUTES = new Set([
  '/',
  '/blog',
  '/glosario',
  '/quienes-somos',
  '/contacto',
  '/politica-de-privacidad',
  '/politica-de-cookies',
  '/aviso-legal'
]);

function isRouteValid(url: string): boolean {
  if (!url.startsWith('/')) {
    return true; // External link or anchor
  }
  const cleanPath = url.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  if (KNOWN_STATIC_ROUTES.has(cleanPath)) {
    return true;
  }
  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '');
    return ARTICLES.some((a) => a.slug === slug) || slug === 'primeros-amigurumi-osito-paso-a-paso';
  }
  return false;
}

function resolveInternalRoute(url: string): string {
  if (url === '/blog/primeros-amigurumi-osito-paso-a-paso') {
    return '/blog/primer-amigurumi-osito-paso-a-paso';
  }
  return url;
}

function pickRelevantPhoto(desc: string, altText: string): string {
  const text = (desc + ' ' + altText).toLowerCase();
  if (text.includes('cadeneta') || text.includes('nudo') || text.includes('eslabón') || text.includes('espiga') || text.includes('lomito')) {
    return '/assets/images/crochet_slip_knot_chain_1793795756670';
  }
  if (text.includes('agarre') || text.includes('sostener') || text.includes('cuchillo') || text.includes('lápiz') || text.includes('zurda') || text.includes('zurdo') || text.includes('mano') || text.includes('dedo') || text.includes('tensar')) {
    return '/assets/images/holding_crochet_hook_1793795756244';
  }
  if (text.includes('kit') || text.includes('comprar') || text.includes('estuche') || text.includes('tijera') || text.includes('marcador') || text.includes('aguja lanera')) {
    return '/assets/images/crochet_starter_kit_1793795743535';
  }
  if (text.includes('etiqueta') || text.includes('muestra') || text.includes('grosor') || text.includes('número de aguja') || text.includes('talla') || text.includes('algodón peinado')) {
    return '/assets/images/yarn_hook_guide_1793795743901';
  }
  if (text.includes('café') || text.includes('taza') || text.includes('bodegón') || text.includes('cesta') || text.includes('cuaderno') || text.includes('taller')) {
    return '/assets/images/crochet_workshop_studio_1793792199359';
  }
  if (text.includes('madeja') || text.includes('ovillo') || text.includes('hilo') || text.includes('fibra')) {
    return '/assets/images/yarn_skeins_palette_1793792198935';
  }
  if (text.includes('sillón') || text.includes('postura') || text.includes('relajada') || text.includes('comenzar') || text.includes('mesa')) {
    return '/assets/images/crochet_beginner_guide_1793795743138';
  }
  return '/assets/images/hero_crochet_table_1793792197109';
}

function FormattedParagraph({ text, onNavigate }: { text: string; onNavigate: (path: string) => void }) {
  // If the paragraph represents a photo slot, render a normal public image with the alt attribute applied
  if (text.includes('[FOTO:')) {
    const photoMatch = text.match(/\[FOTO:\s*([\s\S]*?)\](?:\s*\[ALT:\s*([\s\S]*?)\])?/i);
    if (photoMatch) {
      const description = photoMatch[1].trim();
      const alt = (photoMatch[2] || description).trim();
      const photoPath = pickRelevantPhoto(description, alt);

      return (
        <figure className="my-6 rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#FAF4ED] shadow-xs">
          <ResponsiveImage
            basePath={photoPath}
            alt={alt}
            width={960}
            height={640}
            aspectRatioClass="aspect-[16/10] sm:aspect-[16/9]"
            sizes="(max-width: 800px) 100vw, 896px"
            pinterestButton={{
              pageUrl: typeof window !== 'undefined' ? window.location.href : '',
              description: `${alt} - crochetsimply`
            }}
          />
          {description && (
            <figcaption className="p-3 text-xs text-center text-[#7A6B5F] bg-[#FAF4ED] border-t border-[#EFE3D5] italic font-normal">
              {description}
            </figcaption>
          )}
        </figure>
      );
    }
  }

  // Handle markdown links: [Label](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!linkRegex.test(text)) {
    return (
      <p className="text-sm sm:text-base text-[#6B5C4F] leading-relaxed whitespace-pre-line">
        {text}
      </p>
    );
  }

  linkRegex.lastIndex = 0;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const rawUrl = match[2];
    const key = match.index;
    const url = resolveInternalRoute(rawUrl);
    const valid = isRouteValid(url);

    if (valid) {
      parts.push(
        <a
          key={key}
          href={url}
          onClick={(e) => {
            if (url.startsWith('/')) {
              e.preventDefault();
              onNavigate(url);
            }
          }}
          className="font-semibold text-[#B86B5D] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
        >
          <span>{label}</span>
        </a>
      );
    } else {
      // Deactivate link to non-existent page
      parts.push(
        <span key={key} className="font-semibold text-[#6B5C4F]">
          {label}
        </span>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return (
    <p className="text-sm sm:text-base text-[#6B5C4F] leading-relaxed whitespace-pre-line">
      {parts}
    </p>
  );
}

export function ArticlePage({ slug, onNavigate }: ArticlePageProps) {
  const article = ARTICLES.find((a) => a.slug === slug);

  // Checked state for materials
  const [checkedMaterials, setCheckedMaterials] = useState<Record<number, boolean>>({});
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Comments state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c-1',
      author: 'Laura Gómez',
      date: 'Hace 3 días',
      content: '¡Me ha encantado la explicación del anillo mágico! Por fin me ha salido sin que se me desbarate el primer punto. Ya tengo las orejitas listas.'
    },
    {
      id: 'c-2',
      author: 'Marta R.',
      date: 'Ayer',
      content: 'El patrón del top Brisa es una maravilla. El detalle de tejer las copas con 1 cadeneta en el pico hace que queden súper armadas. Gracias por compartirlo con tanto cariño.'
    }
  ]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');

  if (!article) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-heading font-bold text-[#3D352E]">
          Artículo no encontrado
        </h1>
        <p className="text-sm text-[#6B5C4F]">
          El patrón o tutorial que buscas no existe o ha cambiado de dirección.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/blog')}
          className="px-4 py-2 bg-[#8FA998] text-white text-xs font-semibold rounded-lg"
        >
          Volver al blog
        </button>
      </main>
    );
  }

  const toggleMaterial = (index: number) => {
    setCheckedMaterials((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2500);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const added: Comment = {
      id: `c-${Date.now()}`,
      author: newAuthor.trim(),
      date: 'Recién publicado',
      content: newComment.trim()
    };

    setComments((prev) => [added, ...prev]);
    setNewAuthor('');
    setNewComment('');
  };

  // Related articles
  const relatedArticles = ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <>
      <SeoHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonicalPath={`/blog/${article.slug}`}
        type="article"
        publishedTime={article.isoDate}
        section={article.categoryLabel}
        image={article.heroImage}
        imageAlt={article.imageAlt}
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: article.categoryLabel, url: `/blog?cat=${article.category}` },
          { name: article.title, url: `/blog/${article.slug}` }
        ]}
        articleData={{
          headline: article.title,
          description: article.excerpt,
          image: article.heroImage,
          datePublished: article.isoDate,
          authorName: article.author.name,
          authorJobTitle: article.author.role,
          category: article.categoryLabel
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-8">
        {/* MIGAS DE PAN VISIBLES Y BOTÓN VOLVER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print border-b border-[#EFE3D5] pb-3">
          <Breadcrumbs
            items={[
              { label: 'Blog', path: '/blog' },
              { label: article.categoryLabel, path: `/blog?cat=${article.category}` },
              { label: article.title }
            ]}
            onNavigate={onNavigate}
          />
          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8C7A6B] hover:text-[#3D352E] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al blog</span>
          </button>
        </div>

        {/* CABECERA DEL ARTÍCULO */}
        <header className="space-y-4">
          {/* Zero-Pill unboxed metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#8C7A6B]">
            <button
              type="button"
              onClick={() => onNavigate(`/blog?cat=${article.category}`)}
              className="font-semibold text-[#8FA998] hover:underline"
            >
              {article.categoryLabel}
            </button>
            <span aria-hidden="true">·</span>
            <span>Nivel {article.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={article.isoDate}>{article.date}</time>
            </span>
          </div>

          {/* ÚNICO H1 DE LA PÁGINA */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-bold text-[#3D352E] leading-tight text-balance">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#6B5C4F] leading-relaxed">
            {article.excerpt}
          </p>

          {/* AUTORA Y ACCIONES */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 pb-4 border-y border-[#EFE3D5] text-xs">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#DFCFC1]"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-semibold text-[#3D352E]">{article.author.name}</p>
                <p className="text-[#8C7A6B] text-[11px]">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 no-print">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg border border-[#DFCFC1] bg-white hover:bg-[#FAF4ED] text-[#4A3E34] inline-flex items-center gap-1.5 font-medium transition-colors"
                title="Imprimir patrón para tejer cómodamente"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg border border-[#DFCFC1] bg-white hover:bg-[#FAF4ED] text-[#4A3E34] inline-flex items-center gap-1.5 font-medium transition-colors"
                title="Compartir o copiar enlace"
              >
                {copyFeedback ? <Check className="w-3.5 h-3.5 text-[#8FA998]" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copyFeedback ? '¡Enlace copiado!' : 'Compartir'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Cabecera visible solo al imprimir en papel */}
        <div className="hidden print-only mb-6 border-b-2 border-black pb-3">
          <p className="text-2xl font-bold font-serif">crochetsimply</p>
          <p className="text-base font-semibold">{article.title}</p>
          <p className="text-xs text-gray-600">
            Diseñado por {article.author.name} ({article.author.role}) · Publicado el {article.date} · crochetsimply.online
          </p>
        </div>

        {/* FOTO PRINCIPAL OPTIMIZADA CON BOTÓN PINTEREST */}
        <figure className="rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#FAF4ED] shadow-xs relative">
          <ResponsiveImage
            basePath={article.heroImage}
            alt={article.imageAlt}
            width={1200}
            height={896}
            aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
            priority={true}
            sizes="(max-width: 800px) 100vw, 896px"
            pinterestButton={{
              pageUrl: typeof window !== 'undefined' ? window.location.href : '',
              description: `${article.title} - Patrón gratis de crochet en crochetsimply`
            }}
          />
          <figcaption className="p-3 text-[11px] text-center text-[#8C7A6B] bg-[#FDFBF7] border-t border-[#EFE3D5]">
            {article.imageAlt} · Pasa el ratón para Guardar en Pinterest
          </figcaption>
        </figure>

        {/* FICHA TÉCNICA Y RESUMEN DEL PATRÓN */}
        <section aria-label="Ficha técnica del patrón" className="bg-[#FAF4ED] p-5 sm:p-6 rounded-2xl border border-[#DFCFC1] space-y-4 print-clean-box">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EFE3D5] pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8FA998]">
                Resumen del Proyecto
              </span>
              <h2 className="font-heading font-bold text-lg text-[#3D352E]">
                Ficha Técnica de la Labor
              </h2>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer no-print"
              title="Imprimir versión limpia del patrón en papel"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir patrón completo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-[#E8DDD0]">
              <span className="text-[#8C7A6B] text-[11px] block">Nivel de dificultad</span>
              <span className="font-heading font-bold text-[#3D352E] text-sm mt-0.5 block">
                {article.difficulty}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E8DDD0]">
              <span className="text-[#8C7A6B] text-[11px] block">Tiempo estimado</span>
              <span className="font-heading font-bold text-[#3D352E] text-sm mt-0.5 block">
                {article.estimatedTime || '4 - 5 horas'}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E8DDD0]">
              <span className="text-[#8C7A6B] text-[11px] block">Aguja recomendada</span>
              <span className="font-heading font-bold text-[#3D352E] text-sm mt-0.5 block">
                {article.hookSize || '2.5 mm'}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E8DDD0]">
              <span className="text-[#8C7A6B] text-[11px] block">Técnica</span>
              <span className="font-heading font-bold text-[#3D352E] text-sm mt-0.5 block">
                {article.categoryLabel}
              </span>
            </div>
          </div>

          {/* Banner enlace al Glosario */}
          <div className="p-3 bg-white rounded-xl border border-[#E8DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 no-print">
            <div className="flex items-center gap-2 text-xs text-[#6B5C4F]">
              <BookOpen className="w-4 h-4 text-[#8FA998] shrink-0" />
              <span>¿No conoces algún punto o abreviatura? Revisa cómo tejer cada uno en nuestro glosario.</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/glosario')}
              className="text-xs font-semibold text-[#B86B5D] hover:underline inline-flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Ver Glosario de Puntos</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>
        </section>

        {/* ÍNDICE NAVEGABLE */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <nav aria-label="Índice de contenidos" className="bg-[#FAF4ED] p-5 sm:p-6 rounded-2xl border border-[#E8DDD0] no-print">
            <h2 className="font-heading font-semibold text-base text-[#3D352E] mb-3 flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-[#8FA998]" />
              <span>Índice del tutorial</span>
            </h2>
            <ol className="space-y-1.5 text-xs sm:text-sm text-[#6B5C4F]">
              {article.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="hover:text-[#B86B5D] hover:underline transition-colors block py-0.5"
                  >
                    {toc.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* LISTA DE MATERIALES INTERACTIVA (CHECKLIST) */}
        <section aria-labelledby="materiales-heading" className="bg-white p-6 rounded-2xl border border-[#E8DDD0] space-y-4">
          <div className="flex items-center justify-between border-b border-[#F5EDE3] pb-3">
            <div>
              <h2 id="materiales-heading" className="font-heading font-bold text-lg text-[#3D352E]">
                Lista de Materiales Necesarios
              </h2>
              <p className="text-xs text-[#8C7A6B]">
                Haz clic en las casillas para marcar lo que ya tienes listo en tu cesta de costura.
              </p>
            </div>
          </div>

          <ul className="space-y-2.5">
            {article.materials.map((mat, idx) => {
              const isChecked = !!checkedMaterials[idx];
              return (
                <li
                  key={idx}
                  onClick={() => toggleMaterial(idx)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-[#FAF4ED]/60 border-[#DFCFC1] text-[#8C7A6B]'
                      : 'bg-[#FDFBF7] border-[#E8DDD0] hover:border-[#8FA998] text-[#3D352E]'
                  }`}
                >
                  <button
                    type="button"
                    aria-label={`Marcar ${mat.item}`}
                    className="mt-0.5 text-[#8FA998] shrink-0"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-[#8FA998]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#C4B1A0]" />
                    )}
                  </button>
                  <div className="text-xs sm:text-sm">
                    <span className={isChecked ? 'line-through text-[#8C7A6B]' : 'font-medium'}>
                      {mat.item}
                    </span>
                    {mat.detail && (
                      <p className="text-xs text-[#7A6B5F] mt-0.5 font-normal">
                        {mat.detail}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {article.gauge && (
            <div className="mt-4 p-3.5 bg-[#F5EDE3] rounded-xl text-xs text-[#6B5C4F]">
              <strong className="font-semibold text-[#3D352E]">Muestra de tensión (Gauge): </strong>
              {article.gauge}
            </div>
          )}
        </section>

        {/* ABREVIATURAS EMPLEADAS */}
        {article.abbreviations && article.abbreviations.length > 0 && (
          <section aria-labelledby="abreviaturas-heading" className="bg-[#FAF4ED] p-5 sm:p-6 rounded-2xl border border-[#E8DDD0]">
            <h2 id="abreviaturas-heading" className="font-heading font-semibold text-base text-[#3D352E] mb-3">
              Abreviaturas de Puntos de Crochet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {article.abbreviations.map((abbr) => (
                <div key={abbr.abbr} className="bg-white p-2.5 rounded-lg border border-[#E8DDD0] flex items-center justify-between">
                  <span className="font-mono font-bold text-[#8FA998]">{abbr.abbr}</span>
                  <span className="text-[#6B5C4F] text-right">{abbr.full}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ESPACIO DE PUBLICIDAD DENTRO DEL ARTÍCULO */}
        {/* <AdSlot type="in-article" /> */}

        {/* SECCIONES Y PASOS NUMERADOS */}
        <div className="space-y-10 pt-2">
          {article.contentSections.map((sec) => {
            const isSpecialCallout = sec.id === 'guia-crochet-para-personas-zurdas';
            return (
              <section
                key={sec.id}
                id={sec.id}
                className={
                  isSpecialCallout
                    ? "p-6 sm:p-7 rounded-3xl bg-[#FAF4ED] border-2 border-[#8FA998]/60 shadow-xs space-y-4 scroll-mt-24 relative"
                    : "space-y-4 scroll-mt-24"
                }
              >
                {isSpecialCallout && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA998]/20 text-[#546E5D] text-xs font-bold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-[#8FA998]" />
                    <span>Recuadro Especial para Personas Zurdas</span>
                  </div>
                )}
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352E] border-b border-[#EFE3D5] pb-2">
                  {sec.title}
                </h2>

                {sec.paragraphs?.map((p, idx) => (
                  <FormattedParagraph key={idx} text={p} onNavigate={onNavigate} />
                ))}

              {sec.steps && (
                <div className="space-y-4 pt-2">
                  {sec.steps.map((st) => (
                    <div
                      key={st.number}
                      className="bg-white p-5 rounded-2xl border border-[#E8DDD0] space-y-2 relative shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-full bg-[#8FA998] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {st.number}
                        </span>
                        <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                          {st.heading}
                        </h3>
                      </div>
                      <div className="pl-9">
                        <FormattedParagraph text={st.text} onNavigate={onNavigate} />
                      </div>
                      {st.tip && (
                        <div className="ml-9 mt-2 p-2.5 bg-[#FAF4ED] rounded-lg text-xs text-[#7A6B5F] flex items-start gap-2 border border-[#EFE3D5]">
                          <Lightbulb className="w-3.5 h-3.5 text-[#B86B5D] shrink-0 mt-0.5" />
                          <div><strong>Consejo:</strong> <FormattedParagraph text={st.tip} onNavigate={onNavigate} /></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {sec.subsections && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {sec.subsections.map((sub, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8DDD0] space-y-1.5 shadow-2xs">
                      <h4 className="font-heading font-semibold text-sm text-[#3D352E]">
                        {sub.title}
                      </h4>
                      <FormattedParagraph text={sub.text} onNavigate={onNavigate} />
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
        </div>

        {/* APARTADO: ERRORES COMUNES */}
        {article.commonMistakes && article.commonMistakes.length > 0 && (
          <section id="errores-comunes" aria-labelledby="errores-heading" className="bg-[#FAF4ED] p-6 rounded-2xl border border-[#E8DDD0] space-y-4 scroll-mt-24 shadow-2xs">
            <div className="flex items-center gap-2.5 border-b border-[#EFE3D5] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#B86B5D]/10 text-[#B86B5D] flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 id="errores-heading" className="font-heading font-bold text-xl text-[#3D352E]">
                  Errores comunes y cómo evitarlos
                </h2>
                <p className="text-xs text-[#8C7A6B]">
                  Los tropiezos más habituales que todas cometemos al empezar a tejer y su solución sencilla.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {article.commonMistakes.map((err, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-[#E8DDD0] space-y-2 shadow-2xs">
                  <h3 className="font-heading font-semibold text-sm text-[#B86B5D] flex items-start gap-1.5">
                    <span className="shrink-0 font-bold">✕</span>
                    <span>{err.mistake}</span>
                  </h3>
                  {err.consequence && (
                    <p className="text-xs text-[#8C7A6B] italic">
                      {err.consequence}
                    </p>
                  )}
                  <div className="p-3 bg-[#F5EDE3] rounded-lg text-xs text-[#6B5C4F] space-y-1 border border-[#EFE3D5]">
                    <strong className="text-[#3D352E] font-medium block">Solución práctica:</strong>
                    <FormattedParagraph text={err.solution} onNavigate={onNavigate} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* APARTADO: PREGUNTAS FRECUENTES (FAQ) */}
        {article.faqs && article.faqs.length > 0 && (
          <section id="preguntas-frecuentes" aria-labelledby="faq-heading" className="bg-white p-6 rounded-2xl border border-[#E8DDD0] space-y-4 scroll-mt-24 shadow-2xs">
            <div className="flex items-center gap-2.5 border-b border-[#F5EDE3] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#8FA998]/15 text-[#8FA998] flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 id="faq-heading" className="font-heading font-bold text-xl text-[#3D352E]">
                  Preguntas frecuentes
                </h2>
                <p className="text-xs text-[#8C7A6B]">
                  Dudas habituales resueltas con detalle para que avances con total seguridad.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              {article.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF4ED] border border-[#E8DDD0] space-y-1.5">
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-[#3D352E]">
                    {faq.question}
                  </h3>
                  <FormattedParagraph text={faq.answer} onNavigate={onNavigate} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONSEJO DE EXPERTA */}
        {article.expertTip && (
          <aside className="p-5 sm:p-6 bg-[#F5EDE3] border border-[#DFCFC1] rounded-2xl flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 text-[#B86B5D] shadow-xs">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-base text-[#3D352E] mb-1">
                Tip de la tejedora
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5C4F] leading-relaxed">
                {article.expertTip}
              </p>
            </div>
          </aside>
        )}

        {/* CAJA DE LA AUTORA */}
        <section aria-labelledby="autora-heading" className="bg-white p-6 rounded-2xl border border-[#E8DDD0] flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#8FA998] shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8FA998]">
              Sobre la creadora del patrón
            </span>
            <h3 id="autora-heading" className="font-heading font-bold text-lg text-[#3D352E]">
              {article.author.name}
            </h3>
            <p className="text-xs text-[#6B5C4F] leading-relaxed">
              {article.author.bio}
            </p>
          </div>
        </section>

        {/* PIN VERTICAL 2:3 PARA PINTEREST */}
        {article.pinterestImage && (
          <section aria-labelledby="pinterest-pin-heading" className="bg-[#FAF4ED] p-6 rounded-2xl border border-[#DFCFC1] space-y-4 no-print text-center">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E60023] flex items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.24-.19.291-.439.175-1.643-.766-2.67-3.169-2.67-5.101 0-4.155 3.018-7.971 8.709-7.971 4.572 0 8.125 3.259 8.125 7.614 0 4.543-2.864 8.2-6.839 8.2-1.336 0-2.591-.695-3.02-1.514l-.823 3.136c-.298 1.146-1.104 2.583-1.644 3.456 1.226.378 2.531.583 3.882.583 6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0z"/>
                </svg>
                <span>Pin de Pinterest (Formato Vertical 2:3)</span>
              </span>
              <h3 id="pinterest-pin-heading" className="font-heading font-bold text-lg text-[#3D352E]">
                Guarda este patrón en tus tableros de crochet
              </h3>
              <p className="text-xs text-[#6B5C4F] max-w-md mx-auto">
                Haz clic en el botón rojo sobre la imagen para anclar este tutorial directamente a tu cuenta de Pinterest.
              </p>
            </div>

            <div className="max-w-xs mx-auto rounded-2xl overflow-hidden shadow-md border border-[#E8DDD0]">
              <ResponsiveImage
                basePath={article.pinterestImage}
                alt={`Pin vertical de Pinterest para ${article.title}`}
                width={800}
                height={1200}
                aspectRatioClass="aspect-[2/3]"
                sizes="320px"
                pinterestButton={{
                  pageUrl: typeof window !== 'undefined' ? window.location.href : '',
                  description: `${article.title} - Patrón gratis en crochetsimply`
                }}
              />
            </div>
          </section>
        )}

        {/* BARRA DE COMPARTIR EN REDES SOCIALES */}
        <SocialShareBar
          title={article.title}
          excerpt={article.excerpt}
          image={article.pinterestImage || article.heroImage}
        />

        {/* NEWSLETTER AL FINAL DE CADA ARTÍCULO */}
        <NewsletterBox variant="article-footer" />

        {/* SECCIÓN DE COMENTARIOS / DUDAS */}
        <section aria-labelledby="comentarios-heading" className="space-y-6 pt-6 border-t border-[#EFE3D5] no-print">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#8FA998]" />
            <h2 id="comentarios-heading" className="font-heading font-bold text-xl text-[#3D352E]">
              Dudas y Comentarios ({comments.length})
            </h2>
          </div>

          {/* Formulario de comentario */}
          <form onSubmit={handleAddComment} className="bg-white p-5 rounded-2xl border border-[#E8DDD0] space-y-3">
            <h3 className="font-heading font-semibold text-sm text-[#3D352E]">
              ¿Tienes alguna duda con este patrón? Déjanos tu pregunta
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Tu nombre o apodo tejedor *"
                className="px-3.5 py-2.5 text-xs bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
              />
            </div>
            <textarea
              required
              rows={3}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe aquí tu duda, consulta o si has completado el proyecto..."
              className="w-full px-3.5 py-2.5 text-xs bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Publicar comentario</span>
            </button>
          </form>

          {/* Listado de comentarios */}
          <div className="space-y-3">
            {comments.map((c) => (
              <div key={c.id} className="bg-white p-4 rounded-xl border border-[#E8DDD0] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#3D352E]">{c.author}</span>
                  <span className="text-[#8C7A6B] text-[11px]">{c.date}</span>
                </div>
                <p className="text-xs text-[#6B5C4F] leading-relaxed">
                  {c.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTÍCULOS RELACIONADOS */}
        {relatedArticles.length > 0 && (
          <section aria-labelledby="relacionados-heading" className="space-y-4 pt-10 border-t border-[#EFE3D5] no-print">
            <h2 id="relacionados-heading" className="font-heading font-bold text-xl text-[#3D352E]">
              También te gustará tejer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <a
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/blog/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white p-4 rounded-xl border border-[#E8DDD0] hover:border-[#8FA998] hover:shadow-md transition-all cursor-pointer flex gap-3.5 items-center text-left"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#FAF4ED] shrink-0">
                    <ResponsiveImage
                      basePath={rel.heroImage}
                      alt={rel.imageAlt}
                      width={160}
                      height={160}
                      aspectRatioClass="aspect-square"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8FA998] font-semibold uppercase tracking-wider block">
                      {rel.categoryLabel}
                    </span>
                    <h3 className="font-heading font-semibold text-sm text-[#3D352E] group-hover:text-[#B86B5D] transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <span className="text-[11px] text-[#8C7A6B] mt-1 block">
                      {rel.readingTime} · {rel.difficulty}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
      <BackToTop />
    </>
  );
}
