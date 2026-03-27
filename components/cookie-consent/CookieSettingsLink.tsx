"use client";

import React from "react";
import { Typography } from "@mui/material";

import { openCookieSettings } from "./storage";
import { GREEN, WHITE } from "@/src/styles/constants";
import { opensans } from "@/src/app/layout";

export const CookieSettingsLink = () => {
  return (
    <Typography
      component="button"
      type="button"
      onClick={openCookieSettings}
      sx={{
        background: "none",
        border: 0,
        p: 0,
        cursor: "pointer",
        color: WHITE,
        textAlign: "center",
        fontFamily: opensans.style.fontFamily,
        fontSize: { xs: "16px", sm: "18px" },
        textDecoration: "none",
        textUnderlineOffset: "3px",
        "&:hover": {
          color: GREEN,
        },
      }}
    >
      Cookie Settings
    </Typography>
  );
};
