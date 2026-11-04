import React, { useState } from 'react';
import { Home, Search, ArrowRight, BookOpen } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data/articles';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onNavigate(`/blog?q=${encodeURIComponent(query.trim())}`);
    } else {
      onNavigate('/blog');
    }
  };

  return (
    <>
      <SeoHead
        title="Página no encontrada (Error 404) – crochetsimply"
        description="Lo sentimos, no hemos podido encontrar la página que buscas. Explora nuestros patrones de crochet gratuitos, amigurumis y tutoriales por categorías."
        canonicalPath="/404"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Error 404: Página no encontrada', url: '/404' }
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-8">
        <Breadcrumbs
          items={[{ label: 'Error 404: Página no encontrada' }]}
          onNavigate={onNavigate}
        />

        <div className="bg-white rounded-3xl border border-[#E8DDD0] p-6 sm:p-12 text-center space-y-6 shadow-xs">
          {/* Ilustración artesanal con icono de ovillo */}
          <div className="w-20 h-20 mx-auto rounded-full bg-[#FAF4ED] border border-[#DFCFC1] flex items-center justify-center text-[#B86B5D] relative">
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M4.93 4.93c4.24 3 6.18 7.37 5.07 12.07" />
              <path d="M19.07 4.93c-4.24 3-6.18 7.37-5.07 12.07" />
              <path d="M2.5 14c4-1 9-1 14 3" />
              <path d="M7 21.5c1-4 4-9 11-10" />
            </svg>
            <span className="absolute -bottom-1 -right-1 bg-[#8FA998] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              404
            </span>
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
              Página no encontrada
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#3D352E]">
              ¡Vaya! Parece que este ovillo se ha enredado
            </h1>
            <p className="text-sm sm:text-base text-[#6B5C4F] leading-relaxed">
              La labor que buscabas no está en este punto o ha cambiado de dirección. Pero no te desanimes: tenemos un montón de patrones y tutoriales listos para tus agujas.
            </p>
          </div>

          {/* Buscador directo para que no se pierda */}
          <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por ejemplo 'osito', 'top' o 'algodón'..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors shrink-0"
            >
              Buscar
            </button>
          </form>

          {/* Categorías recomendadas */}
          <div className="pt-4 border-t border-[#F5EDE3] space-y-4">
            <h2 className="font-heading font-semibold text-base text-[#3D352E]">
              O explora directamente una de nuestras categorías:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
              {CATEGORIES.map((cat) => {
                const count = ARTICLES.filter((a) => a.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onNavigate(`/blog?cat=${cat.id}`)}
                    className="p-3.5 rounded-xl border border-[#E8DDD0] hover:border-[#8FA998] hover:bg-[#FAF4ED] transition-all text-left flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="font-heading font-semibold text-xs sm:text-sm text-[#3D352E] group-hover:text-[#8FA998] transition-colors">
                        {cat.label}
                      </h3>
                      <p className="text-[11px] text-[#8C7A6B]">
                        {count > 0 ? `${count} ${count === 1 ? 'guía' : 'guías'}` : 'Explorar'}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C7A6B] group-hover:translate-x-1 group-hover:text-[#8FA998] transition-all" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botones de acción principales */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-5 py-2.5 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>Volver a la página principal</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/blog')}
              className="px-5 py-2.5 bg-white hover:bg-[#FAF4ED] border border-[#DFCFC1] text-[#4A3E34] text-xs sm:text-sm font-medium rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver todos los artículos</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
