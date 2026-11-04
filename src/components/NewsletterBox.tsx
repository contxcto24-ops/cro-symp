import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface NewsletterBoxProps {
  variant?: 'inline' | 'article-footer' | 'site-footer';
  className?: string;
}

export function NewsletterBox({ variant = 'inline', className = '' }: NewsletterBoxProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div
        className={`p-6 rounded-2xl bg-[#F5EDE3] border border-[#DFCFC1] text-center space-y-2 animate-in fade-in duration-300 ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-[#8FA998]/15 text-[#8FA998] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h4 className="font-heading font-semibold text-base text-[#3D352E]">
          ¡Bienvenida al club de tejedoras!
        </h4>
        <p className="text-xs text-[#6B5C4F] max-w-sm mx-auto">
          Hemos recibido tu suscripción para <strong>{email}</strong>. Te avisaremos cada jueves con nuevos patrones gratuitos y trucos de ganchillo.
        </p>
      </div>
    );
  }

  if (variant === 'site-footer') {
    return (
      <div className={`space-y-3 ${className}`}>
        <h4 className="font-heading font-semibold text-sm text-[#3D352E] tracking-wide flex items-center gap-1.5">
          <Mail className="w-4 h-4 text-[#8FA998]" />
          <span>Boletín Semanal de Crochet</span>
        </h4>
        <p className="text-xs text-[#6B5C4F] leading-relaxed">
          Recibe nuevos patrones gratuitos, descargables en PDF y trucos de puntos directamente en tu bandeja de entrada cada semana.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu-correo@ejemplo.com"
              className="w-full px-3 py-2 text-xs bg-white border border-[#DFCFC1] rounded-lg focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0"
              title="Suscribirme a la newsletter"
            >
              Unirme
            </button>
          </div>
          <span className="text-[10px] text-[#8C7A6B] block">
            Cero spam. Puedes darte de baja con un clic cuando quieras.
          </span>
        </form>
      </div>
    );
  }

  // Article Footer variant (prominent, warm card at the end of every tutorial)
  return (
    <section
      aria-labelledby="newsletter-article-heading"
      className={`p-6 sm:p-8 bg-[#FAF4ED] border border-[#DFCFC1] rounded-2xl relative overflow-hidden no-print ${className}`}
    >
      <div className="max-w-xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#B86B5D] bg-[#F5EDE3] px-3 py-1 rounded-full">
          <Sparkles className="w-3 h-3" />
          <span>Club de Tejedoras de crochetsimply</span>
        </div>

        <h3 id="newsletter-article-heading" className="font-heading font-bold text-xl sm:text-2xl text-[#3D352E]">
          ¿Te ha gustado este proyecto?
        </h3>

        <p className="text-xs sm:text-sm text-[#6B5C4F] leading-relaxed">
          Únete a más de 12.000 aficionadas al ganchillo y recibe cada semana en tu correo un patrón exclusivo, vídeos paso a paso y ofertas en hilaturas naturales.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 pt-2 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escribe tu correo electrónico..."
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Recibir patrones</span>
          </button>
        </form>

        <p className="text-[11px] text-[#8C7A6B]">
          Sin publicidad invasiva. Respetamos tu privacidad conforme al RGPD.
        </p>
      </div>
    </section>
  );
}
