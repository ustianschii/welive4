"use client";

import React from "react";
import Script from "next/script";

import {
  COOKIE_CONSENT_CHANGED_EVENT,
  getStoredCookieConsent,
  hasOptionalCookieConsent,
} from "@/components/cookie-consent/storage";

export const Analytics = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  React.useEffect(() => {
    const syncConsent = () => {
      setIsEnabled(hasOptionalCookieConsent(getStoredCookieConsent()));
    };

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, syncConsent);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, syncConsent);
    };
  }, []);

  if (!isEnabled || !process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};
