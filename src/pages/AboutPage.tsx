import React from 'react';
import { Heart, Sparkles, Feather, Users, Compass, BookOpen } from 'lucide-react';
import { AUTHORS } from '../data/articles';
import { AUTHOR_PROFILE, isAuthorConfigured } from '../config/author';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ResponsiveImage } from '../components/ResponsiveImage';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      <SeoHead
        title="Quiénes Somos: La Historia Detrás de crochetsimply"
        description="Conoce al equipo de crochetsimply: Clara Morales y Sofía Vega. Nuestra filosofía de slow craft, amor por los amigurumis y patrones de crochet para todas."
        canonicalPath="/quienes-somos"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Quiénes somos', url: '/quienes-somos' }
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-10">
        {/* MIGAS DE PAN VISIBLES */}
        <Breadcrumbs
          items={[{ label: 'Quiénes somos' }]}
          onNavigate={onNavigate}
        />

        {/* ENCABEZADO */}
        <section className="space-y-4 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
            Nuestra Historia
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#3D352E] leading-tight text-balance">
            Tejer despacio para vivir con más calma y creatividad
          </h1>
          <p className="text-base sm:text-lg text-[#6B5C4F] leading-relaxed">
            <strong>crochetsimply</strong> nació en un pequeño rincón lleno de madejas, con la convicción de que cualquier persona puede disfrutar del ganchillo si cuenta con explicaciones amables y cercanas.
          </p>
        </section>

        {/* FOTO DEL TALLER */}
        <figure className="rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-sm bg-[#FAF4ED]">
          <ResponsiveImage
            basePath="/assets/images/crochet_workshop_studio_1793792199359"
            alt="Atelier artesanal de crochet con estanterías de madejas naturales de colores, manta tejida a ganchillo y plantas"
            width={1200}
            height={896}
            aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
            sizes="(max-width: 900px) 100vw, 896px"
          />
          <figcaption className="p-3.5 text-xs text-center text-[#8C7A6B] bg-white border-t border-[#EFE3D5]">
            El rincón de creación de crochetsimply: donde probamos muestras de tensión, elegimos paletas y diseñamos cada patrón.
          </figcaption>
        </figure>

        {/* MANIFIESTO / FILOSOFÍA */}
        <section aria-labelledby="manifiesto-heading" className="bg-[#FAF4ED] p-6 sm:p-10 rounded-3xl border border-[#E8DDD0] space-y-4">
          <div className="flex items-center gap-2 text-[#B86B5D]">
            <Heart className="w-5 h-5 fill-current" />
            <span className="text-xs uppercase tracking-widest font-semibold">Nuestra Filosofía</span>
          </div>
          <h2 id="manifiesto-heading" className="font-heading font-bold text-2xl text-[#3D352E]">
            El arte de crear con tus propias manos
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-[#6B5C4F] leading-relaxed">
            <p>
              Vivimos en un ritmo acelerado y digital donde todo es inmediato. Para nosotras, el crochet es un acto de rebeldía pacífica: un tiempo que te regalas a ti misma, donde una hebra de algodón y una aguja se transforman en una prenda única, en el peluche favorito de un niño o en un abrigo duradero.
            </p>
            <p>
              Creemos firmemente en el <em>slow fashion</em> y en la artesanía sin elitismos. No necesitas saber matemáticas complejas para tejer: solo paciencia, curiosidad y un patrón que te guíe con cariño en cada vuelta.
            </p>
          </div>
        </section>

        {/* EL EQUIPO / AUTORA */}
        {isAuthorConfigured(AUTHOR_PROFILE) && (
          <section aria-labelledby="equipo-heading" className="space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
                La autora detrás del blog
              </span>
              <h2 id="equipo-heading" className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352E]">
                {AUTHOR_PROFILE.name || 'Sobre la autora'}
              </h2>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DDD0] space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {AUTHOR_PROFILE.avatar && (
                  <img
                    src={AUTHOR_PROFILE.avatar}
                    alt={AUTHOR_PROFILE.name || 'Foto de la autora'}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#8FA998] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="space-y-3 text-center sm:text-left">
                  {AUTHOR_PROFILE.name && (
                    <h3 className="font-heading font-bold text-xl text-[#3D352E]">
                      {AUTHOR_PROFILE.name}
                    </h3>
                  )}
                  {AUTHOR_PROFILE.role && (
                    <p className="text-xs text-[#8FA998] font-semibold uppercase tracking-wider">
                      {AUTHOR_PROFILE.role}
                    </p>
                  )}
                  {AUTHOR_PROFILE.shortBio && (
                    <p className="text-sm sm:text-base text-[#6B5C4F] leading-relaxed">
                      {AUTHOR_PROFILE.shortBio}
                    </p>
                  )}
                </div>
              </div>

              {AUTHOR_PROFILE.crochetExperience && (
                <div className="pt-4 border-t border-[#F5EDE3] space-y-2">
                  <h4 className="font-heading font-semibold text-sm text-[#3D352E]">
                    Mi experiencia con el crochet
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B5C4F] leading-relaxed whitespace-pre-line">
                    {AUTHOR_PROFILE.crochetExperience}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* NUESTROS COMPROMISOS */}
        <section aria-labelledby="compromisos-heading" className="space-y-6 pt-4">
          <h2 id="compromisos-heading" className="font-heading font-bold text-2xl text-[#3D352E] text-center">
            Nuestros Cuatro Compromisos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#E8DDD0] space-y-2">
              <div className="flex items-center gap-2 text-[#8FA998]">
                <Feather className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                  Lenguaje accesible
                </h3>
              </div>
              <p className="text-xs text-[#6B5C4F] leading-relaxed">
                Explicamos cada abreviatura y punto para que no tengas que adivinar qué significa un asterisco o una repetición.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E8DDD0] space-y-2">
              <div className="flex items-center gap-2 text-[#8FA998]">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                  Patrones 100% probados
                </h3>
              </div>
              <p className="text-xs text-[#6B5C4F] leading-relaxed">
                Antes de publicar una guía, tejemos la pieza al menos dos veces para verificar conteos de puntos y medidas exactas.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E8DDD0] space-y-2">
              <div className="flex items-center gap-2 text-[#8FA998]">
                <Compass className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                  Fibras y materiales honestos
                </h3>
              </div>
              <p className="text-xs text-[#6B5C4F] leading-relaxed">
                Recomendamos hilos accesibles y duraderos que no se desgastan al primer lavado ni pierden color.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E8DDD0] space-y-2">
              <div className="flex items-center gap-2 text-[#8FA998]">
                <Users className="w-5 h-5" />
                <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                  Comunidad solidaria
                </h3>
              </div>
              <p className="text-xs text-[#6B5C4F] leading-relaxed">
                Respondemos a las dudas de las tejedoras en los comentarios y celebramos cada logro de principiante.
              </p>
            </div>
          </div>
        </section>

        {/* CTA INVITACIÓN */}
        <div className="text-center pt-6">
          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className="px-6 py-3 bg-[#8FA998] hover:bg-[#7D9786] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Empieza a tejer tu primer proyecto hoy</span>
          </button>
        </div>
      </main>
    </>
  );
}
