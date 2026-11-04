import React from 'react';
import { Heart, Instagram, Mail, Pin, Youtube, Shield, BookOpen } from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import { NewsletterBox } from './NewsletterBox';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCookiesConfig: () => void;
}

export function Footer({ onNavigate, onOpenCookiesConfig }: FooterProps) {
  return (
    <footer className="bg-[#F5EDE3] border-t border-[#E8DDD0] text-[#4A3E34] mt-20 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Columna 1: Brand & Bio (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="text-2xl font-bold font-heading text-[#3D352E] hover:text-[#B86B5D] transition-colors flex items-center gap-1.5"
            >
              <span>crochetsimply</span>
              <span className="w-2 h-2 rounded-full bg-[#E8A598]" aria-hidden="true"></span>
            </button>
            <p className="text-xs text-[#6B5C4F] leading-relaxed">
              El rincón en español para aprender a tejer ganchillo con calma. Patrones explicados con claridad, tutoriales amables y proyectos para amar cada puntada.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#7A6B5F]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 hover:text-[#B86B5D] transition-colors"
                aria-label="Instagram de crochetsimply"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 hover:text-[#B86B5D] transition-colors"
                aria-label="Pinterest de crochetsimply"
              >
                <Pin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 hover:text-[#B86B5D] transition-colors"
                aria-label="Canal de YouTube de crochetsimply"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Categorías (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#3D352E] tracking-wide">
              Categorías
            </h4>
            <ul className="space-y-2 text-xs text-[#6B5C4F]">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/blog?cat=${cat.id}`)}
                    className="hover:text-[#3D352E] hover:underline transition-colors text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enlaces de interés & Legal (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#3D352E] tracking-wide">
              Descubre Más
            </h4>
            <ul className="space-y-2 text-xs text-[#6B5C4F]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-[#3D352E] hover:underline transition-colors text-left"
                >
                  Todos los Patrones
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/glosario')}
                  className="hover:text-[#8FA998] font-medium hover:underline transition-colors text-left flex items-center gap-1"
                >
                  <span>Glosario de Puntos</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/quienes-somos')}
                  className="hover:text-[#3D352E] hover:underline transition-colors text-left"
                >
                  Quiénes somos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contacto')}
                  className="hover:text-[#3D352E] hover:underline transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/aviso-legal')}
                  className="hover:text-[#3D352E] hover:underline transition-colors text-left"
                >
                  Aviso Legal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/politica-de-privacidad')}
                  className="hover:text-[#3D352E] hover:underline transition-colors text-left"
                >
                  Privacidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCookiesConfig}
                  className="text-[#8FA998] hover:text-[#7B9684] font-medium underline transition-colors text-left"
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Formulario Newsletter (4 cols) */}
          <div className="md:col-span-4 bg-white p-5 rounded-2xl border border-[#E8DDD0]">
            <NewsletterBox variant="site-footer" />
          </div>
        </div>

        {/* Separador y Copyright */}
        <div className="border-t border-[#E3D6C7] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6B] gap-4">
          <p>© {new Date().getFullYear()} crochetsimply. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3.5 h-3.5 text-[#E8A598] fill-current" /> para la comunidad tejedora.
          </p>
        </div>
      </div>
    </footer>
  );
}
