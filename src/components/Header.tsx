import React, { useState } from 'react';
import { Menu, X, Search, BookOpen, Sparkles, Filter } from 'lucide-react';
import { AdSlot } from './AdSlot';
import { CATEGORIES } from '../data/articles';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchCategory, setSearchCategory] = useState('todos');

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Glosario', path: '/glosario' },
    { label: 'Quiénes somos', path: '/quienes-somos' },
    { label: 'Contacto', path: '/contacto' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(path);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchText.trim()) {
      params.set('q', searchText.trim());
    }
    if (searchCategory !== 'todos') {
      params.set('cat', searchCategory);
    }
    const queryString = params.toString();
    onNavigate(`/blog${queryString ? `?${queryString}` : ''}`);
    setSearchModalOpen(false);
    setSearchText('');
  };

  return (
    <header className="w-full bg-[#FBF7F0]/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#EFE3D5]">
      {/* 1. Leaderboard Ad in header zone */}
      <AdSlot type="header" className="border-b border-[#F0E6DA]/60" />

      {/* 2. Top Bar Navigation Contract: 3 Zones */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="text-2xl font-bold font-heading tracking-tight text-[#3D352E] hover:text-[#B86B5D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-[#8FA998]"
        >
          <span>crochetsimply</span>
          <span className="w-2 h-2 rounded-full bg-[#E8A598]" aria-hidden="true"></span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-[#8FA998] ${
                  active
                    ? 'text-[#3D352E] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8FA998]'
                    : 'text-[#6B5C4F] hover:text-[#3D352E]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Search Trigger & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            className="p-2 text-[#6B5C4F] hover:text-[#3D352E] hover:bg-[#FAF4ED] rounded-lg transition-colors focus-visible:outline-[#8FA998] flex items-center gap-1.5 text-xs font-medium"
            title="Buscar artículos y patrones"
            aria-label="Abrir buscador"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Buscar</span>
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/blog?cat=patrones')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#8FA998] hover:bg-[#7B9684] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 focus-visible:outline-[#8FA998]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Patrones Gratis</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A3E34] hover:bg-[#FAF4ED] rounded-lg transition-colors focus-visible:outline-[#8FA998]"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Modal / Panel de Búsqueda por Texto y Categoría */}
      {searchModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs"
        >
          <div className="bg-[#FDFBF7] border border-[#E8DDD0] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFE3D5] mb-4">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-[#8FA998]" />
                <h3 className="font-heading font-semibold text-base text-[#3D352E]">
                  Buscar artículos y patrones
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="text-[#8C7A6B] hover:text-[#3D352E] p-1 rounded-md"
                aria-label="Cerrar buscador"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <div>
                <label htmlFor="search-text-input" className="block text-xs font-semibold text-[#3D352E] mb-1">
                  Palabra clave o nombre del proyecto:
                </label>
                <input
                  id="search-text-input"
                  type="text"
                  autoFocus
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Ej. 'osito', 'top de verano', 'anillo mágico', 'algodón'..."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
                />
              </div>

              <div>
                <label htmlFor="search-cat-select" className="block text-xs font-semibold text-[#3D352E] mb-1">
                  Filtrar por categoría:
                </label>
                <select
                  id="search-cat-select"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
                >
                  <option value="todos">Todas las categorías</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#6B5C4F] hover:bg-[#FAF4ED] rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Buscar ahora</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav aria-label="Menú móvil" className="md:hidden bg-[#FDFBF7] border-b border-[#E8DDD0] px-6 py-4 shadow-lg space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.path}
              type="button"
              onClick={() => handleLinkClick(link.path)}
              className={`block w-full text-left py-2.5 text-base font-medium transition-colors border-b border-[#F4ECE3] ${
                isActive(link.path) ? 'text-[#B86B5D] font-semibold' : 'text-[#4A3E34]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#4A3E34] bg-[#FAF4ED] border border-[#DFCFC1] rounded-lg transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Buscar por texto y categoría</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/blog?cat=patrones')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#8FA998] hover:bg-[#7B9684] rounded-lg shadow-xs transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver todos los Patrones</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
