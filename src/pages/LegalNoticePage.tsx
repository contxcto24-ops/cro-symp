import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LegalNoticeProps {
  onNavigate: (path: string) => void;
}

export function LegalNoticePage({ onNavigate }: LegalNoticeProps) {
  return (
    <>
      <SeoHead
        title="Aviso Legal – crochetsimply"
        description="Aviso legal y condiciones de uso del sitio web crochetsimply en cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE) de España."
        canonicalPath="/aviso-legal"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Aviso Legal', url: '/aviso-legal' }
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-6">
        <Breadcrumbs
          items={[{ label: 'Aviso Legal' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-2 border-b border-[#EFE3D5] pb-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
            Información Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#3D352E]">
            Aviso Legal
          </h1>
          <p className="text-xs text-[#8C7A6B]">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
          </p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-[#6B5C4F] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              1. Datos Identificativos del Titular
            </h2>
            <ul className="space-y-1 list-none pl-0">
              <li><strong>Denominación comercial:</strong> crochetsimply</li>
              <li><strong>Titulares:</strong> Clara Morales y Sofía Vega</li>
              <li><strong>Domicilio del taller:</strong> C/ Gran Vía, Madrid, España</li>
              <li><strong>Correo electrónico de contacto:</strong> legal@crochetsimply.com</li>
              <li><strong>Actividad:</strong> Blog divulgativo de artesanía, patrones de crochet y tutoriales textiles.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              2. Condiciones de Uso y Aceptación
            </h2>
            <p>
              El acceso y navegación por el sitio web <strong>crochetsimply</strong> atribuye la condición de usuaria e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. La usuaria se compromete a hacer un uso lícito del sitio web, de conformidad con las leyes, la buena fe y el orden público.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              3. Propiedad Intelectual e Industrial sobre Patrones y Diseños
            </h2>
            <p>
              Todos los contenidos de este blog —incluyendo textos, explicaciones paso a paso de los patrones, tablas de medidas, diagramas gráficos, logotipos y fotografías originales— son propiedad intelectual de <strong>crochetsimply</strong> o de sus respectivos autores, protegidos por el Real Decreto Legislativo 1/1996 de la Ley de Propiedad Intelectual de España y convenios internacionales.
            </p>
            <div className="bg-[#FAF4ED] p-4 rounded-xl border border-[#DFCFC1] space-y-2">
              <strong className="text-[#3D352E] font-semibold block">
                Uso permitido de los patrones para creadoras:
              </strong>
              <p>
                ✓ <strong>Permitido:</strong> Tejer y vender las piezas físicas y muñecos elaborados artesanalmente con tus propias manos siguiendo nuestros patrones gratuitos, solicitando siempre citar el diseño original ("Patrón por crochetsimply").
              </p>
              <p>
                ✗ <strong>Prohibido:</strong> La copia, reproducción total o parcial, venta o redistribución digital de los textos, archivos PDF, gráficos o fotografías del patrón sin autorización previa y por escrito.
              </p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              4. Exclusión de Responsabilidad
            </h2>
            <p>
              El titular del sitio web no se hace responsable de las opiniones vertidas por las usuarias en la sección de comentarios, reservándose el derecho de retirar aquellos que vulneren el respeto, la legalidad o atenten contra las normas comunitarias.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              5. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Para la resolución de cualquier litigio o cuestión relacionada con el presente sitio web o con las actividades en él desarrolladas, será de aplicación la legislación española, sometiéndose las partes a los Juzgados y Tribunales de la ciudad de Madrid (España).
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
