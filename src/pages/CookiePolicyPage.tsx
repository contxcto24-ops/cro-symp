import React from 'react';
import { ArrowLeft, Cookie, Settings2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface CookiePolicyProps {
  onNavigate: (path: string) => void;
  onOpenCookiesConfig: () => void;
}

export function CookiePolicyPage({ onNavigate, onOpenCookiesConfig }: CookiePolicyProps) {
  return (
    <>
      <SeoHead
        title="Política de Cookies – crochetsimply"
        description="Información sobre las cookies utilizadas en crochetsimply conforme a la Ley de Servicios de la Sociedad de la Información (LSSI-CE) en España."
        canonicalPath="/politica-de-cookies"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Política de Cookies', url: '/politica-de-cookies' }
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-6">
        <Breadcrumbs
          items={[{ label: 'Política de Cookies' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-2 border-b border-[#EFE3D5] pb-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
            Normativa de Cookies
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#3D352E]">
            Política de Cookies
          </h1>
          <p className="text-xs text-[#8C7A6B]">
            Adaptada al art. 22 de la Ley 34/2002 (LSSI-CE) y a la Guía sobre el uso de cookies de la AEPD.
          </p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-[#6B5C4F] leading-relaxed">
          <div className="bg-[#FAF4ED] p-4 rounded-xl border border-[#DFCFC1] flex items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-semibold text-[#3D352E]">
                Configurar tus preferencias ahora
              </h3>
              <p className="text-xs text-[#7A6B5F] mt-0.5">
                Puedes cambiar en cualquier momento tu selección de cookies analíticas o de publicidad.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenCookiesConfig}
              className="px-3.5 py-2 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors flex items-center gap-1.5"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Gestionar cookies</span>
            </button>
          </div>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              1. ¿Qué es una Cookie?
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web guarda en su navegador u ordenador al visitarlo. Las cookies permiten que el sitio web recuerde sus acciones y preferencias (como el consentimiento de privacidad o el tamaño de letra) durante un periodo de tiempo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              2. Tipos de Cookies Empleadas en crochetsimply
            </h2>
            
            <div className="space-y-3">
              <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0]">
                <h3 className="font-heading font-semibold text-sm text-[#3D352E]">
                  A) Cookies Técnicas y Estrictamente Necesarias (Obligatorias)
                </h3>
                <p className="text-xs text-[#7A6B5F] mt-1">
                  Son imprescindibles para el correcto funcionamiento del blog, la navegación segura y el almacenamiento de sus preferencias de cookies. No pueden ser desactivadas en nuestros sistemas.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0]">
                <h3 className="font-heading font-semibold text-sm text-[#3D352E]">
                  B) Cookies Analíticas o de Medición (Opcionales)
                </h3>
                <p className="text-xs text-[#7A6B5F] mt-1">
                  Permiten cuantificar el número de usuarias y analizar qué tutoriales y patrones son los más populares de forma anónima y agregada para mejorar el contenido del blog.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0]">
                <h3 className="font-heading font-semibold text-sm text-[#3D352E]">
                  C) Cookies Publicitarias y de Afiliación (Opcionales)
                </h3>
                <p className="text-xs text-[#7A6B5F] mt-1">
                  Permiten gestionar eficazmente los espacios publicitarios reservados en cabecera, barra lateral y dentro del artículo, ofreciendo anuncios relacionados con mercerías, madejas de lanas y accesorios de tejido.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              3. Tabla de Cookies Utilizadas
            </h2>
            <div className="overflow-x-auto border border-[#E8DDD0] rounded-xl bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF4ED] text-[#3D352E] font-semibold border-b border-[#E8DDD0]">
                  <tr>
                    <th className="p-2.5">Nombre</th>
                    <th className="p-2.5">Proveedor</th>
                    <th className="p-2.5">Finalidad</th>
                    <th className="p-2.5">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5EDE3] text-[#6B5C4F]">
                  <tr>
                    <td className="p-2.5 font-mono text-[11px]">crochetsimply_cookie_consent</td>
                    <td className="p-2.5">Propia</td>
                    <td className="p-2.5">Almacena el estado de consentimiento de cookies</td>
                    <td className="p-2.5">12 meses</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono text-[11px]">_ga / _gid</td>
                    <td className="p-2.5">Google Analytics (Terceros)</td>
                    <td className="p-2.5">Métricas de páginas vistas y lectura agregada</td>
                    <td className="p-2.5">Hasta 2 años</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono text-[11px]">_ad_partner_slot</td>
                    <td className="p-2.5">Red Publicitaria</td>
                    <td className="p-2.5">Control de frecuencia de banners publicitarios</td>
                    <td className="p-2.5">30 días</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              4. Cómo Desactivar o Eliminar Cookies en su Navegador
            </h2>
            <p>
              Además de nuestro panel de configuración, usted puede restringir, bloquear o borrar las cookies de cualquier sitio web mediante la configuración de su navegador:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.</li>
              <li><strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
              <li><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
