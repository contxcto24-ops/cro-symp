import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  className?: string;
}

export function Breadcrumbs({ items, onNavigate, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Migas de pan" className={`no-print ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#8C7A6B]">
        {/* Enlace al inicio */}
        <li className="inline-flex items-center">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="hover:text-[#3D352E] transition-colors inline-flex items-center gap-1 focus-visible:outline-[#8FA998]"
            title="Ir a la página de inicio"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#C4B1A0] shrink-0" aria-hidden="true" />
              {isLast || !item.path ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="font-semibold text-[#3D352E] truncate max-w-[200px] sm:max-w-md"
                >
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate(item.path!)}
                  className="hover:text-[#3D352E] transition-colors focus-visible:outline-[#8FA998]"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
