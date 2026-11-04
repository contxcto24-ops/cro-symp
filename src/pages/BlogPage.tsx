import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, BookOpen, Clock, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { CategoryId, DifficultyLevel } from '../types';
import { SeoHead } from '../components/SeoHead';
import { AdSlot } from '../components/AdSlot';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ResponsiveImage } from '../components/ResponsiveImage';

interface BlogPageProps {
  initialCategory?: CategoryId;
  initialQuery?: string;
  onNavigate: (path: string) => void;
}

export function BlogPage({ initialCategory = 'todos', initialQuery = '', onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Todos' | DifficultyLevel>('Todos');
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchCategory =
        selectedCategory === 'todos' || article.category === selectedCategory;
      const matchDifficulty =
        selectedDifficulty === 'Todos' || article.difficulty === selectedDifficulty;
      const matchSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchDifficulty && matchSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <>
      <SeoHead
        title={
          selectedCategory === 'todos'
            ? 'Blog de Crochet: Patrones Gratis, Tutoriales y Guías – crochetsimply'
            : `${activeCategoryObj?.label || 'Categoría'} de Crochet: Patrones y Guías – crochetsimply`
        }
        description="Explora todos nuestros patrones de crochet en español, tutoriales paso a paso para amigurumis y prendas de ganchillo, y consejos sobre hilos y materiales."
        canonicalPath="/blog"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Blog', url: '/blog' },
          ...(selectedCategory !== 'todos' && activeCategoryObj
            ? [{ name: activeCategoryObj.label, url: `/blog?cat=${activeCategoryObj.id}` }]
            : [])
        ]}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-8">
        {/* MIGAS DE PAN VISIBLES */}
        <Breadcrumbs
          items={[
            { label: 'Blog y Patrones', path: selectedCategory !== 'todos' ? '/blog' : undefined },
            ...(selectedCategory !== 'todos' && activeCategoryObj
              ? [{ label: activeCategoryObj.label }]
              : [])
          ]}
          onNavigate={onNavigate}
        />
        {/* PAGE HEADER */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
            Archivo y Tutoriales
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#3D352E]">
            Blog de Crochet y Patrones
          </h1>
          <p className="text-sm sm:text-base text-[#6B5C4F] leading-relaxed">
            Descubre guías detalladas para crear amigurumis encantadores, tops de verano y aprender trucos esenciales con hilo y aguja. Filtra por categoría o nivel de dificultad.
          </p>
        </div>

        {/* CONTROLES DE FILTRO Y BÚSQUEDA */}
        <section aria-label="Filtros de búsqueda" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Buscador */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar patrones, puntos o hilos..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E] shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7A6B] hover:text-[#3D352E]"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Filtro por dificultad */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#8C7A6B] font-medium shrink-0">Nivel:</span>
              <div className="flex items-center gap-1 bg-[#F5EDE3] p-1 rounded-lg">
                {(['Todos', 'Principiante', 'Intermedio'] as const).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSelectedDifficulty(level)}
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                      selectedDifficulty === level
                        ? 'bg-white text-[#3D352E] shadow-xs'
                        : 'text-[#6B5C4F] hover:text-[#3D352E]'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Categorías (Segmented Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory('todos')}
              className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'todos'
                  ? 'bg-[#8FA998] text-white shadow-xs'
                  : 'bg-white text-[#6B5C4F] border border-[#DFCFC1] hover:bg-[#FAF4ED]'
              }`}
            >
              Todos los artículos ({ARTICLES.length})
            </button>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              const count = ARTICLES.filter((a) => a.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors shrink-0 ${
                    active
                      ? 'bg-[#8FA998] text-white shadow-xs'
                      : 'bg-white text-[#6B5C4F] border border-[#DFCFC1] hover:bg-[#FAF4ED]'
                  }`}
                >
                  {cat.label} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </section>

        {/* CONTENIDO PRINCIPAL: 2 COLUMNAS (ARTÍCULOS + SIDEBAR) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* COLUMNA DE ARTÍCULOS (8 columnas) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between text-xs text-[#8C7A6B] border-b border-[#EFE3D5] pb-2">
              <span>
                Mostrando <strong className="font-semibold text-[#3D352E]">{filteredArticles.length}</strong> {filteredArticles.length === 1 ? 'artículo' : 'artículos'}
              </span>
              {(selectedCategory !== 'todos' || selectedDifficulty !== 'Todos' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('todos');
                    setSelectedDifficulty('Todos');
                    setSearchQuery('');
                  }}
                  className="text-[#B86B5D] hover:underline"
                >
                  Restablecer filtros
                </button>
              )}
            </div>

            {filteredArticles.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-[#E8DDD0] space-y-3">
                <p className="text-base font-heading font-medium text-[#3D352E]">
                  No hemos encontrado ningún artículo con estos filtros
                </p>
                <p className="text-xs text-[#6B5C4F]">
                  Intenta buscar otra palabra clave o restablece la categoría seleccionada.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('todos');
                    setSelectedDifficulty('Todos');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-[#8FA998] text-white text-xs font-medium rounded-lg"
                >
                  Ver todos los artículos
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => onNavigate(`/blog/${article.slug}`)}
                    className="group bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row cursor-pointer"
                  >
                    <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-[#FAF4ED] relative shrink-0">
                      <ResponsiveImage
                        basePath={article.heroImage}
                        alt={article.imageAlt}
                        width={640}
                        height={480}
                        aspectRatioClass="aspect-[4/3] sm:h-full"
                        sizes="(max-width: 640px) 100vw, 320px"
                        className="group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        {/* Zero-Pill unboxed metadata */}
                        <div className="flex items-center gap-2 text-xs text-[#8C7A6B]">
                          <span className="font-semibold text-[#8FA998]">{article.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.difficulty}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readingTime}</span>
                        </div>

                        <h2 className="font-heading font-bold text-xl text-[#3D352E] group-hover:text-[#B86B5D] transition-colors leading-snug">
                          {article.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-[#6B5C4F] leading-relaxed line-clamp-3">
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
                        <span className="inline-flex items-center gap-1 text-[#8FA998] font-medium group-hover:translate-x-0.5 transition-transform">
                          <span>Leer tutorial</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* BARRA LATERAL (4 columnas, sticky) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Widget de bienvenida */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8DDD0] space-y-3">
              <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                Sobre crochetsimply
              </h3>
              <p className="text-xs text-[#6B5C4F] leading-relaxed">
                Somos un espacio creado por y para tejedoras. Compartimos patrones gratuitos, explicaciones accesibles y probamos cada puntada para que tejer sea tu momento favorito del día.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/quienes-somos')}
                className="text-xs font-medium text-[#B86B5D] hover:underline block"
              >
                Conocer a las tejedoras detrás del blog →
              </button>
            </div>

            {/* ESPACIO DE PUBLICIDAD EN BARRA LATERAL */}
            <AdSlot type="sidebar" />

            {/* Widget: Recomendación de material */}
            <div className="bg-[#FAF4ED] p-5 rounded-2xl border border-[#E8DDD0] space-y-3">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8FA998]">
                Recomendación del taller
              </span>
              <h4 className="font-heading font-semibold text-sm text-[#3D352E]">
                Kit básico para iniciarte en el ganchillo
              </h4>
              <p className="text-xs text-[#6B5C4F] leading-relaxed">
                Si estás empezando, solo necesitas una aguja ergonómica de 3.0 mm, un ovillo de algodón peinado color pastel y marcadores de candado.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/blog/mejores-tipos-hilo-crochet-ganchillo')}
                className="text-xs text-[#8FA998] font-medium hover:underline block pt-1"
              >
                Leer guía de materiales recomendados →
              </button>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
