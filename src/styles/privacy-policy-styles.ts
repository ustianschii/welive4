"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Container as MuiContainer,
} from "@mui/material";

import { WHITE } from "@/src/styles/constants";
import { opensans } from "../app/layout";

export const Paragraph = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  paddingBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "0 50px 50px 50px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 50px 20px 50px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 25px 20px 25px",
  },
}));
