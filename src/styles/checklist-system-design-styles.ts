"use client";

import { styled } from "@mui/material/styles";
import { Container as MuiContainer, Box as MuiBox } from "@mui/material";

import { MAIN_SERVICES_BACKGROUND } from "./constants";

export const Wrapper = styled(MuiBox)(() => ({
  minHeight: "2400px",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
}));
export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  padding: "0 0 20px 0",

  [theme.breakpoints.down("sm")]: {
    padding: "0 10px 10px 10px",
  },
}));
