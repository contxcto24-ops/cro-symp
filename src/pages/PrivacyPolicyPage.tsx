import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: LegalPageProps) {
  return (
    <>
      <SeoHead
        title="Política de Privacidad – crochetsimply"
        description="Información detallada sobre el tratamiento de datos personales conforme al RGPD y a la LOPD-GDD en crochetsimply."
        canonicalPath="/politica-de-privacidad"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Política de Privacidad', url: '/politica-de-privacidad' }
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-6">
        <Breadcrumbs
          items={[{ label: 'Política de Privacidad' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-2 border-b border-[#EFE3D5] pb-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
            Información Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#3D352E]">
            Política de Privacidad
          </h1>
          <p className="text-xs text-[#8C7A6B]">
            Última actualización: 4 de Noviembre de 2026 · Adaptada al RGPD (UE 2016/679) y a la Ley Orgánica 3/2018 (LOPD-GDD) de España.
          </p>
        </header>

        <div className="space-y-6 text-xs sm:text-sm text-[#6B5C4F] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              1. Responsable del Tratamiento de sus Datos
            </h2>
            <p>
              El titular y responsable del tratamiento de los datos personales recabados en este sitio web es el equipo editorial de <strong>crochetsimply</strong>, con domicilio de contacto a efectos de privacidad en Madrid (España) y correo electrónico oficial de contacto: <a href="mailto:privacidad@crochetsimply.com" className="text-[#8FA998] underline">privacidad@crochetsimply.com</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              2. Datos Recabados y Finalidad del Tratamiento
            </h2>
            <p>
              En <strong>crochetsimply</strong> solo solicitamos los datos estrictamente necesarios para ofrecer nuestros tutoriales y servicios:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Formulario de contacto:</strong> Nombre y correo electrónico para responder a sus dudas sobre patrones, sugerencias o propuestas de colaboración.
              </li>
              <li>
                <strong>Comentarios en artículos:</strong> Nombre o alias y mensaje para moderar y publicar sus aportaciones sobre cada proyecto.
              </li>
              <li>
                <strong>Boletín de novedades (Newsletter):</strong> Correo electrónico para el envío de patrones gratuitos y guías semanales en caso de suscripción voluntaria.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              3. Base Jurídica (Legitimación)
            </h2>
            <p>
              La base legal para el tratamiento de sus datos es el <strong>consentimiento inequívoco</strong> manifestado mediante la marcación de la casilla de aceptación al enviar el formulario o al suscribirse al boletín (art. 6.1.a RGPD).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              4. Plazo de Conservación de los Datos
            </h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender su consulta o mientras mantenga activa su suscripción a nuestra newsletter. En cualquier momento puede solicitar la baja o supresión de sus datos.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading font-bold text-lg text-[#3D352E]">
              5. Derechos de la Persona Interesada (Derechos ARCO-POL)
            </h2>
            <p>
              Conforme a la legislación vigente española y comunitaria, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de los datos inexactos.</li>
              <li>Solicitar su supresión cuando ya no sean necesarios para los fines que fueron recogidos.</li>
              <li>Oponerse o limitar el tratamiento de sus datos.</li>
              <li>Solicitar la portabilidad de sus datos.</li>
            </ul>
            <p className="pt-1">
              Puede ejercer cualquiera de estos derechos enviando un correo a <a href="mailto:privacidad@crochetsimply.com" className="text-[#8FA998] underline">privacidad@crochetsimply.com</a> adjuntando documento acreditativo de su identidad. Asimismo, si considera vulnerados sus derechos, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noreferrer" className="underline">www.aepd.es</a>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
