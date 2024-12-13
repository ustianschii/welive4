import React from "react";
import Script from "next/script";

export const HSAnalytics = () => {
  return (
    <Script
      type="text/javascript"
      id="hs-script-loader"
      async
      defer
      src="//js.hs-scripts.com/48166700.js"
    />
  );
};
