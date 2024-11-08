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

export const Container = styled(MuiContainer)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  padding: "30px 0",
}));

export const CardBox = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  marginTop: "20px",
}));

export const CardContent = styled(MuiBox)(() => ({
  margin: "0 40px 10px 40px",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  margin: "20px 0",

  [theme.breakpoints.down("md")]: {
    padding: "0px 50px",
    fontSize: "33px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0px 30px",
    fontSize: "30px",
  },
}));

export const Subtitle = styled(MuiTypography)(() => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  fontSize: "20px",
  margin: "10px 0",
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  border: "2px solid white",
  lineHeight: "120%",
  margin: "20px 0",

  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "60px",
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "250px",
    height: "50px",
    fontSize: "16px",
  },
}));
