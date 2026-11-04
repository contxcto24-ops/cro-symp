import React from 'react';
import { Sparkles } from 'lucide-react';

interface AdSlotProps {
  type: 'header' | 'in-article' | 'sidebar';
  className?: string;
  adId?: string;
}

export function AdSlot({ type, className = '', adId }: AdSlotProps) {
  if (type === 'header') {
    return (
      <aside
        aria-label="Espacio de publicidad en cabecera"
        className={`w-full max-w-5xl mx-auto my-3 px-4 no-print ${className}`}
      >
        <div className="bg-[#FAF4ED] border border-dashed border-[#DFCFC1] rounded-lg p-2.5 text-center flex flex-col items-center justify-center min-h-[70px] sm:min-h-[90px] relative transition-colors hover:border-[#C4B1A0]">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C7A6B] mb-1">
            Publicidad
          </span>
          <div className="flex items-center gap-2 text-xs text-[#6B5C4F]">
            <Sparkles className="w-3.5 h-3.5 text-[#C88A7D]" />
            <span className="font-medium text-xs sm:text-sm">
              Espacio publicitario disponible: Leaderboard (728×90 / 320×50)
            </span>
          </div>
          <p className="text-[11px] text-[#A39284] mt-0.5 hidden sm:block">
            Marcas de lanas, hilos y accesorios de costura · Anúnciate en crochetsimply
          </p>
        </div>
      </aside>
    );
  }

  if (type === 'in-article') {
    return (
      <aside
        aria-label="Espacio de publicidad dentro del artículo"
        className={`my-8 py-2 no-print ${className}`}
      >
        <div className="bg-[#FAF4ED] border border-dashed border-[#DFCFC1] rounded-xl p-5 text-center flex flex-col items-center justify-center min-h-[140px] relative transition-colors hover:border-[#C4B1A0]">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C7A6B] mb-1.5">
            Anuncio Patrocinado
          </span>
          <div className="max-w-md mx-auto">
            <h4 className="font-heading font-semibold text-[#4A3E34] text-sm sm:text-base mb-1">
              ¿Tienes una tienda de lanas o accesorios para tejedoras?
            </h4>
            <p className="text-xs text-[#7A6B5F] leading-relaxed mb-3">
              Llega a miles de aficionadas al crochet y amigurumi cada mes con un anuncio destacado dentro de nuestros patrones más leídos.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#B86B5D] hover:underline cursor-pointer">
              <span>Información sobre tarifas y formatos patrocinados</span>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  // Sidebar Ad
  return (
    <aside
      aria-label="Espacio publicitario en barra lateral"
      className={`my-6 no-print ${className}`}
    >
      <div className="bg-[#FAF4ED] border border-dashed border-[#DFCFC1] rounded-xl p-5 text-center flex flex-col items-center justify-center min-h-[250px] relative transition-colors hover:border-[#C4B1A0]">
        <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C7A6B] mb-2">
          Publicidad · 300×250
        </span>
        <div className="w-12 h-12 rounded-full bg-[#EFE3D5] flex items-center justify-center mb-3 text-[#A37B6F]">
          <Sparkles className="w-6 h-6" />
        </div>
        <h4 className="font-heading font-semibold text-[#3D352E] text-sm mb-1.5">
          Tu marca de hilaturas aquí
        </h4>
        <p className="text-xs text-[#7A6B5F] leading-relaxed px-2 mb-3">
          Banner lateral de alta visibilidad para mercerías, libros de patrones y kits de ganchillo.
        </p>
        <button
          type="button"
          onClick={() => {
            window.location.hash = '#contacto';
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }}
          className="text-xs font-medium px-3.5 py-1.5 bg-[#E8DDD0] hover:bg-[#DFCFC1] text-[#4A3E34] rounded-md transition-colors"
        >
          Consultar disponibilidad
        </button>
      </div>
    </aside>
  );
}
