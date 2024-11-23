"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";

import { SEPARATOR_BACKGROUND } from "@/styles/constants";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "500px",
}));
