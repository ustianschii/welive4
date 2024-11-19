"use client";

import { styled } from "@mui/material/styles";
import { Button as MuiButton, Container as MuiContainer } from "@mui/material";

import { WHITE, GREEN, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    padding: "0 100px",
  },

  [theme.breakpoints.up("md")]: {
    padding: "0 50px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 50px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 20px",
  },
}));

export const Button = styled(MuiButton)(() => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  fontSize: "16px",
  padding: "5px 30px",
}));
