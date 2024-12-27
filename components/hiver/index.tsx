"use client";
import { useEffect } from "react";
import Script from "next/script";

const ChatWidget: React.FC = () => {
  useEffect(() => {
    if (window.chatwootSDK) {
      window.chatwootSDK.run({
        websiteToken: "ZfakKYEMDYuhn3ZGidrsCSnu",
        baseUrl: "http://chatwoot-rails-api-service:80",
      });
    }
  }, []);

  return (
    <Script
      src="https://chat-widget.hiverhq.com/chat-widget/js/sdk.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: "ZfakKYEMDYuhn3ZGidrsCSnu",
            baseUrl: "http://chatwoot-rails-api-service:80",
          });
        }
      }}
    />
  );
};

export default ChatWidget;
