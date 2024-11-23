"use client";

import { useEffect } from "react";
import { Wrapper } from "./styles";

export const HSFormChecklistShort = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48166700",
          formId: "0db4b597-8589-4915-9349-607702813fe9",
          target: "#hubspotForm",
        });
      }
    };

    document.body.appendChild(script);
  }, []);
  return (
    <Wrapper>
      <div id="hubspotForm"></div>
    </Wrapper>
  );
};
