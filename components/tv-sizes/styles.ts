"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import { raleway } from "@/src/app/layout";
import { SEMI_BOLD, WHITE } from "@/src/styles/constants";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  backgroundImage: `url('outdoor-tv/desktop/sizes-bg.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {},
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    backgroundImage: `url('outdoor-tv/sizes-bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1",
  textAlign: "center",
  padding: "30px 0",

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  textTransform: "uppercase",
  marginBottom: "20px",
  padding: "0 20px",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
