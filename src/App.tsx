/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { LegalNoticePage } from './pages/LegalNoticePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { GlosarioPage } from './pages/GlosarioPage';
import { CategoryId } from './types';
import { ARTICLES } from './data/articles';
import { Cookie } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [cookieModalOpen, setCookieModalOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      window.history.pushState({}, '', path);
    } catch (e) {
      // Fallback for sandboxes that restrict pushState
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route parsing
  const renderCurrentRoute = () => {
    const url = currentPath.split('?')[0];
    const searchParams = new URLSearchParams(currentPath.includes('?') ? currentPath.split('?')[1] : '');

    // Home: / or empty
    if (url === '/' || url === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // Blog detail route: /blog/:slug
    if (url.startsWith('/blog/')) {
      let slug = url.replace('/blog/', '').replace(/\/$/, '');
      if (slug === 'primeros-amigurumi-osito-paso-a-paso') {
        slug = 'primer-amigurumi-osito-paso-a-paso';
      }
      const articleExists = ARTICLES.some((a) => a.slug === slug);
      if (!articleExists) {
        return <NotFoundPage onNavigate={navigate} />;
      }
      return <ArticlePage slug={slug} onNavigate={navigate} />;
    }

    // Blog listing: /blog
    if (url === '/blog') {
      const catParam = searchParams.get('cat') as CategoryId | null;
      const queryParam = searchParams.get('q') || '';
      return (
        <BlogPage
          key={`${catParam || 'todos'}-${queryParam}`}
          initialCategory={catParam || 'todos'}
          initialQuery={queryParam}
          onNavigate={navigate}
        />
      );
    }

    // Glosario de puntos y abreviaturas: /glosario
    if (url === '/glosario') {
      return <GlosarioPage onNavigate={navigate} />;
    }

    // Quiénes somos: /quienes-somos
    if (url === '/quienes-somos') {
      return <AboutPage onNavigate={navigate} />;
    }

    // Contacto: /contacto
    if (url === '/contacto') {
      return <ContactPage onNavigate={navigate} />;
    }

    // Políticas y Aviso legal (España)
    if (url === '/politica-de-privacidad') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }

    if (url === '/politica-de-cookies') {
      return (
        <CookiePolicyPage
          onNavigate={navigate}
          onOpenCookiesConfig={() => setCookieModalOpen(true)}
        />
      );
    }

    if (url === '/aviso-legal') {
      return <LegalNoticePage onNavigate={navigate} />;
    }

    // Fallback 404
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F0] text-[#3D352E]">
      {/* Header with Navigation and Leaderboard Ad */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Dynamic Route Content with Semantic HTML */}
      <div className="flex-1">
        {renderCurrentRoute()}
      </div>

      {/* Footer with Spanish Legal Links and Cookie Config */}
      <Footer
        onNavigate={navigate}
        onOpenCookiesConfig={() => setCookieModalOpen(true)}
      />

      {/* Cookie Consent Banner and Preferences Modal */}
      <CookieBanner
        onNavigate={navigate}
        isOpenExternal={cookieModalOpen}
        onCloseExternal={() => setCookieModalOpen(false)}
      />

      {/* Floating button to re-open cookie preferences anytime (accessible privacy control) */}
      <button
        type="button"
        onClick={() => setCookieModalOpen(true)}
        className="fixed bottom-3 right-3 z-30 p-2.5 bg-white/90 hover:bg-white text-[#7A6B5F] hover:text-[#3D352E] rounded-full border border-[#DFCFC1] shadow-md transition-all hover:scale-105 no-print"
        title="Configurar cookies"
        aria-label="Configurar preferencias de cookies"
      >
        <Cookie className="w-4 h-4 text-[#8FA998]" />
      </button>
    </div>
  );
}
