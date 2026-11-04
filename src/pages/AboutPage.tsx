import React from 'react';
import { Heart, Sparkles, Feather, Users, Compass, BookOpen } from 'lucide-react';
import { AUTHORS } from '../data/articles';
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

        {/* EL EQUIPO */}
        <section aria-labelledby="equipo-heading" className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
              Las manos tejedores
            </span>
            <h2 id="equipo-heading" className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352E]">
              Conoce al equipo de crochetsimply
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Clara */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8DDD0] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3.5">
                  <img
                    src={AUTHORS.clara.avatar}
                    alt={AUTHORS.clara.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#8FA998]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#3D352E]">
                      {AUTHORS.clara.name}
                    </h3>
                    <p className="text-xs text-[#8FA998] font-medium">
                      {AUTHORS.clara.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5C4F] leading-relaxed">
                  "Empecé a tejer cuando necesitaba desconectar del estrés del trabajo frente a la pantalla. Crear amigurumis me devolvió la ilusión de regalar algo hecho con mis manos. Mi meta es que cualquier novata logre su primer muñeco sin frustración."
                </p>
              </div>
              <div className="pt-3 border-t border-[#F5EDE3] text-xs text-[#8C7A6B]">
                Especialidad: Técnicas circulares, espirales, aumentos invisibles y bordado.
              </div>
            </div>

            {/* Sofía */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8DDD0] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3.5">
                  <img
                    src={AUTHORS.sofia.avatar}
                    alt={AUTHORS.sofia.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#8FA998]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#3D352E]">
                      {AUTHORS.sofia.name}
                    </h3>
                    <p className="text-xs text-[#8FA998] font-medium">
                      {AUTHORS.sofia.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5C4F] leading-relaxed">
                  "Vengo del mundo del patronaje y me enamoré de la versatilidad del ganchillo para construir prendas con caída y texturas sorprendentes. Me apasiona enseñar cómo adaptar las medidas a cualquier cuerpo sin fórmulas imposibles."
                </p>
              </div>
              <div className="pt-3 border-t border-[#F5EDE3] text-xs text-[#8C7A6B]">
                Especialidad: Prendas de verano, calados de fantasía, bloqueos y fibras naturales.
              </div>
            </div>
          </div>
        </section>

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
