import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X, Settings2, Check } from 'lucide-react';
import { CookiePreferences } from '../types';

const STORAGE_KEY = 'crochetsimply_cookie_consent_v1';

interface CookieBannerProps {
  onNavigate: (path: string) => void;
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
}

export function CookieBanner({ onNavigate, isOpenExternal, onCloseExternal }: CookieBannerProps) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [tempAnalytics, setTempAnalytics] = useState(false);
  const [tempAdvertising, setTempAdvertising] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences(parsed);
        setTempAnalytics(parsed.analytics);
        setTempAdvertising(parsed.advertising);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isOpenExternal) {
      setShowConfigModal(true);
    }
  }, [isOpenExternal]);

  const saveConsent = (analytics: boolean, advertising: boolean) => {
    const updated: CookiePreferences = {
      technical: true,
      analytics,
      advertising,
      hasConsented: true,
      updatedAt: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
    setPreferences(updated);
    setShowConfigModal(false);
    if (onCloseExternal) {
      onCloseExternal();
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('crochetsimply-cookie-update'));
    }
  };

  useEffect(() => {
    const handleOpenModal = () => {
      setShowConfigModal(true);
    };
    window.addEventListener('crochetsimply-open-cookie-modal', handleOpenModal);
    return () => {
      window.removeEventListener('crochetsimply-open-cookie-modal', handleOpenModal);
    };
  }, []);

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectAll = () => {
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(tempAnalytics, tempAdvertising);
  };

  const isBannerVisible = !preferences && !showConfigModal;

  return (
    <>
      {/* 1. Bottom floating banner if no consent given yet */}
      {isBannerVisible && (
        <aside
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
          className="cookie-banner fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 bg-[#FDFBF7] border border-[#E8DDD0] shadow-xl rounded-2xl p-5 md:p-6 transition-all duration-300"
        >
          <div className="flex items-start gap-3.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#F3D2C9]/50 flex items-center justify-center shrink-0 text-[#B86B5D] mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cookie-title" className="font-heading font-semibold text-base text-[#3D352E]">
                Valoramos tu privacidad y tu tiempo de tejido
              </h3>
              <p className="text-xs text-[#6B5C4F] leading-relaxed mt-1">
                Utilizamos cookies propias y de terceros para asegurar el correcto funcionamiento del blog, recordar tus preferencias, elaborar estadísticas anónimas de navegación y ofrecerte contenidos relevantes según la normativa de la UE y de España (RGPD y LSSI-CE).
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EFE3D5]">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={handleRejectAll}
              className="px-3.5 py-2 bg-white hover:bg-[#FAF4ED] text-[#4A3E34] border border-[#DFCFC1] text-xs font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              Rechazar no esenciales
            </button>
            <button
              type="button"
              onClick={() => {
                setTempAnalytics(false);
                setTempAdvertising(false);
                setShowConfigModal(true);
              }}
              className="px-3 py-2 text-[#7A6B5F] hover:text-[#3D352E] text-xs font-medium underline underline-offset-2 transition-colors ml-auto whitespace-nowrap"
            >
              Configurar cookies
            </button>
          </div>
          
          <div className="mt-2.5 text-[11px] text-[#8C7A6B]">
            Más información en nuestra{' '}
            <button
              type="button"
              onClick={() => onNavigate('/politica-de-cookies')}
              className="underline hover:text-[#3D352E]"
            >
              Política de cookies
            </button>
            .
          </div>
        </aside>
      )}

      {/* 2. Configuration Modal */}
      {showConfigModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        >
          <div className="bg-[#FDFBF7] border border-[#E8DDD0] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFE3D5] mb-4">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-[#8FA998]" />
                <h3 id="cookie-modal-title" className="font-heading font-semibold text-lg text-[#3D352E]">
                  Configuración de Cookies
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowConfigModal(false);
                  if (onCloseExternal) onCloseExternal();
                }}
                className="text-[#8C7A6B] hover:text-[#3D352E] p-1 rounded-md"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#6B5C4F] mb-4 leading-relaxed">
              Puedes activar o desactivar cada categoría de cookies de forma individual. Las cookies técnicas necesarias son indispensables para que la web funcione y no pueden desactivarse.
            </p>

            <div className="space-y-4">
              {/* Categoría: Técnicas */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-[#3D352E] flex items-center gap-1.5">
                      Cookies Técnicas y Estrictamente Necesarias
                      <ShieldCheck className="w-4 h-4 text-[#8FA998]" />
                    </h4>
                    <p className="text-xs text-[#7A6B5F] mt-1">
                      Permiten la navegación segura, guardar la sesión y tus preferencias de consentimiento.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#8FA998] px-2.5 py-1 bg-[#8FA998]/10 rounded-md shrink-0">
                    Siempre activas
                  </span>
                </div>
              </div>

              {/* Categoría: Analíticas */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-[#3D352E]">
                      Cookies de Rendimiento y Análisis
                    </h4>
                    <p className="text-xs text-[#7A6B5F] mt-1">
                      Nos ayudan a entender qué patrones y tutoriales son los más visitados para mejorar nuestros contenidos sin identificarte personalmente.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={tempAnalytics}
                      onChange={(e) => setTempAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8FA998]"></div>
                  </label>
                </div>
              </div>

              {/* Categoría: Publicidad */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E8DDD0]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-[#3D352E]">
                      Cookies de Publicidad y Patrocinadores
                    </h4>
                    <p className="text-xs text-[#7A6B5F] mt-1">
                      Permiten mostrar anuncios afines a temas de tejido, lanas y costura, adaptando los espacios reservados a tus intereses.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={tempAdvertising}
                      onChange={(e) => setTempAdvertising(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8FA998]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-[#EFE3D5]">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-medium text-[#4A3E34] hover:bg-[#FAF4ED] rounded-lg transition-colors"
              >
                Aceptar todas
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-2 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
              >
                Guardar mis preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
