"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";

import {
  GREEN,
  WHITE,
  BOLD,
  SUBMIT_FORM_BACKGROUND,
  SEMI_BOLD,
  MAIN_SERVICES_BACKGROUND,
} from "@/src/styles/constants";
import { raleway, opensans } from "@/src/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  padding: "30px 0",
}));

export const BannerContainer = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "20px",

  [theme.breakpoints.up("lg")]: {
    width: "900px",
    padding: "30px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "600px",
    padding: "30px",
  },
  [theme.breakpoints.down("md")]: {
    width: "600px",
    padding: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    padding: "20px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  margin: "20px 0",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontSize: "18px",
  lineHeight: "120%",
  fontWeight: BOLD,
  border: "2px solid white",
  height: "40px",

  [theme.breakpoints.up("md")]: {
    width: "40%",
  },

  [theme.breakpoints.down("md")]: {
    width: "50%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
}));
