"use client";

import React, { useEffect, useRef } from "react";

import { FormBox } from "./styles";

export const CCChecklistLong = () => {
  const calculatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (calculatorRef.current) {
      const script = document.createElement("script");
      script.src = "https://scripts.convertcalculator.com/embed.js";
      script.async = true;
      calculatorRef.current.appendChild(script);
    }
  }, []);

  return (
    <FormBox>
      <div
        className="calculator"
        data-calc-id="8gk3dp8rn52gT6fdB"
        data-type="framed"
        ref={calculatorRef}
      ></div>
    </FormBox>
  );
};
