"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import { MAIN_SERVICES_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.down("md")]: {
    padding: "30px 50px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 10px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "35px",
  [theme.breakpoints.down("sm")]: {},
}));
