import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 bg-[#8FA998] hover:bg-[#7D9786] text-white rounded-full shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Volver arriba"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
