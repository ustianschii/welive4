"use client";

import { useEffect } from "react";

export const HSFormChecklistLong = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48166700",
          formId: "c3563e1b-10ce-45b6-beca-f085f333ac76",
          target: "#hubspotForm",
        });
      }
    };

    document.body.appendChild(script);
  }, []);
  return <div id="hubspotForm"></div>;
};
