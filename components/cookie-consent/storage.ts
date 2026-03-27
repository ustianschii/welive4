"use client";

export type CookieConsentStatus = "accepted" | "rejected";

export const COOKIE_CONSENT_STORAGE_KEY = "welive4-cookie-consent";
export const COOKIE_CONSENT_CHANGED_EVENT = "welive4:cookie-consent-changed";
export const COOKIE_SETTINGS_OPEN_EVENT = "welive4:cookie-settings-open";

export const getStoredCookieConsent = (): CookieConsentStatus | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (storedValue === "accepted" || storedValue === "rejected") {
    return storedValue;
  }

  return null;
};

export const setStoredCookieConsent = (status: CookieConsentStatus) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, status);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT));
};

export const openCookieSettings = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_OPEN_EVENT));
};

export const hasOptionalCookieConsent = (
  status: CookieConsentStatus | null
) => status === "accepted";
