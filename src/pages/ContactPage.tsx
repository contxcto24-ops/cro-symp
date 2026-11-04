import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export function ContactPage({ onNavigate = () => {} }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'duda-patron',
    experience: 'principiante',
    message: '',
    privacyAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Puedo vender los muñecos o prendas que teja siguiendo vuestros patrones?',
      a: '¡Por supuesto que sí! Tienes total libertad para vender las piezas físicas que tejas a mano a pequeña escala. Solo te pedimos que nos menciones como diseñadoras del patrón original (diseño de crochetsimply). Lo que no está permitido es revender o redistribuir los textos e imágenes del patrón.'
    },
    {
      q: '¿Qué hago si me atasco en una vuelta de un patrón?',
      a: 'Puedes dejarnos un comentario directamente al final del artículo correspondiente o escribirnos a través del formulario indicando la vuelta exacta. Revisamos los mensajes y respondemos con consejos personalizados.'
    },
    {
      q: '¿Aceptáis colaboraciones con marcas de lanas o mercerías?',
      a: 'Sí, siempre que los productos encajen con nuestros valores de calidad, fibras naturales y respeto al medio ambiente. Selecciona "Colaboración o patrocinio" en el desplegable del formulario.'
    }
  ];

  return (
    <>
      <SeoHead
        title="Contacto y Colaboraciones – crochetsimply"
        description="Escríbenos para resolver dudas sobre patrones de crochet, consultas de lanas o propuestas de colaboración con el taller de crochetsimply."
        canonicalPath="/contacto"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Contacto y colaboraciones', url: '/contacto' }
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-8">
        {/* MIGAS DE PAN VISIBLES */}
        <Breadcrumbs
          items={[{ label: 'Contacto y colaboraciones' }]}
          onNavigate={onNavigate}
        />
        {/* ENCABEZADO */}
        <section className="space-y-3 text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
            Hablemos
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#3D352E]">
            Contacto y Colaboraciones
          </h1>
          <p className="text-sm sm:text-base text-[#6B5C4F] leading-relaxed">
            ¿Tienes alguna sugerencia de patrón, una duda con una vuelta o quieres patrocinar un espacio en el blog? Nos encantará leerte.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* FORMULARIO (7 cols) */}
          <section className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DDD0] shadow-2xs">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#8FA998]/15 text-[#8FA998] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#3D352E]">
                  ¡Mensaje recibido con éxito!
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5C4F] max-w-sm mx-auto leading-relaxed">
                  Gracias por escribirnos, <strong>{formData.name}</strong>. Te responderemos a <strong>{formData.email}</strong> en un plazo habitual de 24 a 48 horas laborables.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: 'duda-patron',
                      experience: 'principiante',
                      message: '',
                      privacyAccepted: false
                    });
                  }}
                  className="px-4 py-2 bg-[#FAF4ED] hover:bg-[#EFE3D5] text-xs font-semibold text-[#4A3E34] rounded-lg transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#3D352E] mb-1">
                    Tu nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carmen López"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#3D352E] mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#3D352E] mb-1">
                      Motivo del mensaje
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
                    >
                      <option value="duda-patron">Duda sobre un patrón</option>
                      <option value="sugerencia">Sugerencia de nuevo tutorial</option>
                      <option value="colaboracion">Colaboración / Marcas</option>
                      <option value="otro">Otro asunto</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-xs font-semibold text-[#3D352E] mb-1">
                      Nivel en crochet
                    </label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
                    >
                      <option value="principiante">Principiante (recién empiezo)</option>
                      <option value="intermedio">Intermedio (hago prendas y amigurumis)</option>
                      <option value="avanzado">Avanzado (diseño y adapto patrones)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#3D352E] mb-1">
                    Tu mensaje *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos con detalle tu consulta o propuesta..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="privacy"
                    type="checkbox"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-0.5 rounded border-[#DFCFC1] text-[#8FA998] focus:ring-[#8FA998]"
                  />
                  <label htmlFor="privacy" className="text-xs text-[#6B5C4F] leading-tight">
                    He leído y acepto la Política de Privacidad para el envío de este formulario de contacto.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.privacyAccepted}
                  className="w-full py-3 bg-[#8FA998] hover:bg-[#7D9786] disabled:opacity-50 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            )}
          </section>

          {/* INFORMACIÓN DE CONTACTO & FAQS (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-[#FAF4ED] p-6 rounded-2xl border border-[#E8DDD0] space-y-3">
              <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                Datos directos del blog
              </h3>
              <p className="text-xs text-[#6B5C4F] leading-relaxed">
                Si prefieres escribirnos directamente por correo electrónico:
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-[#8FA998]">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@crochetsimply.com" className="hover:underline">
                  hola@crochetsimply.com
                </a>
              </div>
              <p className="text-[11px] text-[#8C7A6B] pt-1">
                Atelier digital en Madrid, España. Horario de respuesta: Lunes a Viernes de 09:30 a 18:30 (CET).
              </p>
            </div>

            {/* PREGUNTAS FRECUENTES RÁPIDAS */}
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-base text-[#3D352E] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#8FA998]" />
                <span>Preguntas Frecuentes Rápidas</span>
              </h3>

              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-[#E8DDD0] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-3.5 text-left text-xs font-semibold text-[#3D352E] flex items-center justify-between gap-2 hover:bg-[#FAF4ED] transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#8FA998] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#8FA998] shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-[#6B5C4F] leading-relaxed border-t border-[#F5EDE3] pt-2">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
