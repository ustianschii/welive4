"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  GREEN,
  WHITE,
  SUBMIT_FORM_BACKGROUND,
  BOLD,
  MAIN_SERVICES_BACKGROUND,
} from "@/src/styles/constants";
import { raleway } from "@/src/app/layout";

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
    padding: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    padding: "20px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    margin: "10px 0 0 20px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    margin: "10px 0 0 20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    margin: "0 0 0 20px",
  },
}));

export const Title = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: BOLD,
  fontSize: "28px",
}));
