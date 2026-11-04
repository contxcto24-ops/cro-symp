/**
 * Configuración central del sitio web crochetsimply
 * 
 * Cambia esta única variable DEFAULT_SITE_DOMAIN cuando tengas tu dominio final definitivo:
 * (ejemplo: 'https://crochetsimply.es' o 'https://tudominio.com').
 * 
 * También puedes sobreescribirla en producción configurando la variable de entorno VITE_SITE_URL.
 */
export const DEFAULT_SITE_DOMAIN = 'https://crochetsimply.online';

export const SITE_DOMAIN = (
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  DEFAULT_SITE_DOMAIN
).replace(/\/+$/, '');

export const SITE_NAME = 'crochetsimply';
export const SITE_DEFAULT_TITLE = 'crochetsimply – Patrones de Crochet, Amigurumis y Tutoriales Fáciles';
export const SITE_DEFAULT_DESCRIPTION = 'Aprende crochet paso a paso con patrones gratis de amigurumis, ropa tejida a ganchillo y guías de lanas para principiantes y tejedoras creativas.';
