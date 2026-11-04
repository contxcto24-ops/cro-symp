/**
 * Configuración editable de la autora del sitio crochetsimply.
 * 
 * Rellena los siguientes campos con tus datos reales. Si se dejan vacíos (""),
 * la caja de autora al final de los artículos y en la página "Quiénes somos"
 * se ocultarán automáticamente en el sitio público.
 */
export interface AuthorProfile {
  name: string;
  role: string;
  shortBio: string;
  avatar: string;
  crochetExperience: string;
}

export const AUTHOR_PROFILE: AuthorProfile = {
  name: '',
  role: '',
  shortBio: '',
  avatar: '',
  crochetExperience: ''
};

export function isAuthorConfigured(profile: AuthorProfile = AUTHOR_PROFILE): boolean {
  return Boolean(
    profile.name.trim() ||
    profile.shortBio.trim() ||
    profile.crochetExperience.trim() ||
    profile.avatar.trim()
  );
}
