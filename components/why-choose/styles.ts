"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
} from "@mui/material";

import { opensans } from "@/src/app/layout";
import {
  SEMI_BOLD,
  WHITE,
  MAIN_SERVICES_BACKGROUND,
} from "@/src/styles/constants";

export const Wrapper = styled(MuiContainer)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  textAlign: "center",
  padding: "35px 0",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",

  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  marginTop: "20px",

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
    marginTop: "50px",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    marginTop: "50px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "10px 20px",
    gap: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}));
