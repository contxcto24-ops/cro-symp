import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle } from 'lucide-react';

interface SocialShareBarProps {
  title: string;
  excerpt: string;
  image: string;
  url?: string;
}

export function SocialShareBar({ title, excerpt, image, url }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false);

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const mediaUrl = image.startsWith('http') ? image : (typeof window !== 'undefined' ? window.location.origin + image : image);

  const sharePinterest = () => {
    const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(mediaUrl)}&description=${encodeURIComponent(title + ' - ' + excerpt)}`;
    window.open(pinUrl, '_blank', 'noopener,noreferrer,width=750,height=600');
  };

  const shareWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`¡Mira este patrón de crochet en crochetsimply! ${title}: ${currentUrl}`)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const shareFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(fbUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E8DDD0] space-y-3 no-print">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4 text-[#8FA998]" />
          <span className="font-heading font-semibold text-sm text-[#3D352E]">
            ¿Te gusta este patrón? Compártelo con tus amigas tejedoras:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Pinterest */}
          <button
            type="button"
            onClick={sharePinterest}
            className="px-3 py-1.5 bg-[#E60023] hover:bg-[#C8001F] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            title="Guardar en tablero de Pinterest"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.24-.19.291-.439.175-1.643-.766-2.67-3.169-2.67-5.101 0-4.155 3.018-7.971 8.709-7.971 4.572 0 8.125 3.259 8.125 7.614 0 4.543-2.864 8.2-6.839 8.2-1.336 0-2.591-.695-3.02-1.514l-.823 3.136c-.298 1.146-1.104 2.583-1.644 3.456 1.226.378 2.531.583 3.882.583 6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0z"/>
            </svg>
            <span>Pinterest</span>
          </button>

          {/* WhatsApp */}
          <button
            type="button"
            onClick={shareWhatsApp}
            className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            title="Compartir por WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            onClick={shareFacebook}
            className="px-3 py-1.5 bg-[#1877F2] hover:bg-[#1565CD] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            title="Compartir en Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </button>

          {/* Copiar enlace */}
          <button
            type="button"
            onClick={copyLink}
            className="px-3 py-1.5 bg-[#FAF4ED] hover:bg-[#EFE3D5] text-[#4A3E34] border border-[#DFCFC1] text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            title="Copiar enlace al portapapeles"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#8FA998]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '¡Copiado!' : 'Copiar enlace'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
