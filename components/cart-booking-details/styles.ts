"use client";

import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { WHITE, GREEN, SEMI_BOLD } from "@/src/styles/constants";
import { opensans } from "@/src/app/layout";

export const Button = styled(MuiButton)(() => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  fontSize: "18px",
  padding: "5px 30px",
}));
