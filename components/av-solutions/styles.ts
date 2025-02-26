"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
} from "@/src/styles/constants";
import { raleway } from "@/src/app/layout";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.down("md")]: {
    padding: "30px 40px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px",
  },
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.up("lg")]: {
    padding: "30px 50px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "30px 70px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "30px 40px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "27px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "27px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  marginTop: "20px",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
