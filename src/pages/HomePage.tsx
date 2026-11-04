import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Heart, Download } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { SeoHead } from '../components/SeoHead';
import { AdSlot } from '../components/AdSlot';
import { ResponsiveImage } from '../components/ResponsiveImage';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <SeoHead
        title="crochetsimply – Patrones de Crochet, Amigurumis y Tutoriales Fáciles"
        description="Aprende crochet paso a paso con patrones gratis de amigurumis, ropa tejida a ganchillo y guías de lanas para principiantes y tejedoras creativas."
        canonicalPath="/"
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-16">
        {/* HERO SECTION */}
        <section aria-label="Bienvenida a crochetsimply" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E6558] bg-[#F5E5E0] px-3 py-1 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ganchillo moderno para principiantes y aficionadas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#3D352E] tracking-tight leading-[1.15] text-balance">
              Teje tus propias historias, punto a punto y sin prisas.
            </h1>

            <p className="text-base sm:text-lg text-[#6B5C4F] leading-relaxed max-w-xl">
              Bienvenida a <strong>crochetsimply</strong>, tu rincón cálido donde el ganchillo se vuelve fácil. Aquí encontrarás patrones claros de amigurumis, ropa veraniega a crochet y guías de hilados sin términos confusos.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/blog')}
                className="px-6 py-3 bg-[#8FA998] hover:bg-[#7D9786] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 group"
              >
                <span>Explorar todos los patrones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/quienes-somos')}
                className="px-5 py-3 bg-white hover:bg-[#FAF4ED] text-[#4A3E34] border border-[#DFCFC1] text-sm font-medium rounded-xl transition-colors"
              >
                Conoce nuestra historia
              </button>
            </div>

            {/* Micro proof points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#7A6B5F]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8FA998]" />
                <span>Patrones 100% probados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8FA998]" />
                <span>Paso a paso con fotos reales</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8FA998]" />
                <span>Comunidad en español</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8DDD0] bg-[#FAF4ED] aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3]">
              <ResponsiveImage
                basePath="/assets/images/hero_crochet_table_1793792197109"
                alt="Mesa de trabajo artesanal con ovillos de algodón en tonos rosa pastel y verde salvia, agujas de bambú y taza de té"
                width={1200}
                height={900}
                aspectRatioClass="aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3]"
                priority={true}
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
          </div>
        </section>


        {/* SERIE DESTACADA: PRIMEROS PASOS EN CROCHET */}
        <section aria-labelledby="primeros-pasos-title" className="bg-[#FAF4ED] p-6 sm:p-8 rounded-3xl border border-[#DFCFC1] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EFE3D5] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8FA998] mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Curso gratuito desde cero</span>
              </div>
              <h2 id="primeros-pasos-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#3D352E]">
                Aprende Crochet: Serie "Primeros Pasos"
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5C4F] mt-1 max-w-xl">
                Cinco lecciones prácticas pensadas para ti si nunca has tocado una aguja: materiales, postura, tensión y tus primeras cadenetas.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/blog?cat=primeros-pasos')}
              className="text-xs font-semibold text-[#B86B5D] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Ver las 5 lecciones</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLES.filter((a) => a.category === 'primeros-pasos').slice(0, 3).map((article, index) => (
              <article
                key={article.id}
                onClick={() => onNavigate(`/blog/${article.slug}`)}
                className="group bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#FAF4ED] relative">
                  <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-xs text-[#3D352E] px-2.5 py-1 rounded-lg text-xs font-heading font-bold shadow-xs">
                    Lección {index + 1}
                  </div>
                  <ResponsiveImage
                    basePath={article.heroImage}
                    alt={article.imageAlt}
                    width={640}
                    height={480}
                    aspectRatioClass="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-[#8C7A6B] font-medium block">
                      {article.readingTime} · Nivel {article.difficulty}
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#3D352E] group-hover:text-[#B86B5D] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#6B5C4F] line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#8FA998] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 pt-1">
                    <span>Empezar lección</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ÚLTIMOS ARTÍCULOS PUBLICADOS */}
        <section aria-labelledby="ultimos-articulos-title" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EFE3D5] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C7A6B]">
                Recién salido de nuestras agujas
              </span>
              <h2 id="ultimos-articulos-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#3D352E] mt-1">
                Últimos Artículos y Patrones
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/blog')}
              className="text-xs font-semibold text-[#B86B5D] hover:underline flex items-center gap-1"
            >
              <span>Ir al blog completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => onNavigate(`/blog/${article.slug}`)}
                className="group bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#FAF4ED] relative">
                  <ResponsiveImage
                    basePath={article.heroImage}
                    alt={article.imageAlt}
                    width={640}
                    height={480}
                    aspectRatioClass="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Zero-Pill unboxed metadata with dot separators */}
                    <div className="flex items-center gap-2 text-xs text-[#8C7A6B]">
                      <span className="font-semibold text-[#8FA998]">{article.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.difficulty}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readingTime}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#3D352E] group-hover:text-[#B86B5D] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#6B5C4F] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F5EDE3] flex items-center justify-between text-xs text-[#8C7A6B]">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span>{article.author.name}</span>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CATEGORÍAS DESTACADAS */}
        <section aria-labelledby="categorias-title" className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EFE3D5] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C7A6B]">
                Encuentra tu próximo proyecto
              </span>
              <h2 id="categorias-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#3D352E] mt-1">
                Categorías Destacadas
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/blog')}
              className="text-xs font-semibold text-[#B86B5D] hover:underline flex items-center gap-1"
            >
              <span>Ver todas las categorías</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => {
              const count = ARTICLES.filter((a) => a.category === cat.id).length;
              return (
                <div
                  key={cat.id}
                  onClick={() => onNavigate(`/blog?cat=${cat.id}`)}
                  className="group bg-white p-5 rounded-2xl border border-[#E8DDD0] hover:border-[#8FA998] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-semibold text-lg text-[#3D352E] group-hover:text-[#8FA998] transition-colors">
                        {cat.label}
                      </h3>
                      <span className="text-xs text-[#8C7A6B] font-mono tabular-nums">
                        {count > 0 ? `${count} ${count === 1 ? 'guía' : 'guías'}` : 'Próximamente'}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B5C4F] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F5EDE3] flex items-center text-xs font-medium text-[#8C7A6B] group-hover:text-[#3D352E] transition-colors">
                    <span>Explorar categoría</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* IN-CONTENT AD SLOT BETWEEN SECTIONS */}
        {/* <AdSlot type="in-article" /> */}

        {/* LEAD MAGNET / GUÍA GRATUITA */}
        <section
          aria-labelledby="recurso-gratuito-title"
          className="bg-[#F3EFE9] border border-[#DFCFC1] rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
              Regalo de bienvenida para tejedoras
            </span>
            <h2 id="recurso-gratuito-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#3D352E]">
              Descarga gratis: "Guía Esencial de Puntos y Abreviaturas de Crochet"
            </h2>
            <p className="text-sm text-[#6B5C4F] leading-relaxed">
              Un descargable imprimible de 2 páginas con todos los puntos básicos en español, su equivalencia en inglés (US/UK) y el diagrama ilustrado para tener siempre en tu bolsa de labores.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('¡Gracias! Te hemos enviado la guía básica a tu correo electrónico.');
              }}
              className="flex flex-col sm:flex-row gap-2.5 pt-2"
            >
              <input
                type="email"
                required
                placeholder="Tu correo electrónico..."
                className="px-4 py-3 text-xs sm:text-sm bg-white border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] flex-1 text-[#3D352E]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Recibir guía gratuita</span>
              </button>
            </form>
            <p className="text-[11px] text-[#8C7A6B]">
              Cero spam. Solo consejos de crochet y patrones de estreno una vez a la semana. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
