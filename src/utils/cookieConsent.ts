import { CookiePreferences } from '../types';

export const COOKIE_STORAGE_KEY = 'crochetsimply_cookie_consent_v1';

export function getStoredCookieConsent(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as CookiePreferences;
    }
  } catch (e) {
    // Ignore
  }
  return null;
}

export function hasAdvertisingConsent(): boolean {
  const consent = getStoredCookieConsent();
  return Boolean(consent && consent.advertising === true);
}

export function hasAnalyticsConsent(): boolean {
  const consent = getStoredCookieConsent();
  return Boolean(consent && consent.analytics === true);
}
