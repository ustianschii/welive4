"use client";

import { styled } from "@mui/material/styles";
import { Container as MuiContainer, Box as MuiBox } from "@mui/material";

import { SEPARATOR_BACKGROUND } from "./constants";

export const Wrapper = styled(MuiBox)(() => ({
  minHeight: "2400px",
  backgroundColor: SEPARATOR_BACKGROUND,
}));
export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "0 0 20px 0",

  [theme.breakpoints.down("sm")]: {
    padding: "0 10px 10px 10px",
  },
}));
