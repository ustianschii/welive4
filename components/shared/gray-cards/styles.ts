"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

import {
  BOLD,
  MAIN_SERVICES_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  [theme.breakpoints.down("md")]: {
    padding: "50px 0 0 0 ",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 0 0 0 ",
  },
}));

export const CardBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  padding: "0px 30px",
  margin: "20px 0",

  [theme.breakpoints.down("md")]: {
    fontSize: "33px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "10px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginBottom: "10px",
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
    fontSize: "14px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  border: "2px solid white",
  lineHeight: "120%",
  width: "300px",
  margin: "20px 0",

  [theme.breakpoints.down("md")]: {
    height: "60px",
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "50px",
    fontSize: "16px",
  },
}));
