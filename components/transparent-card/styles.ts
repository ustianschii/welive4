"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import { SEPARATOR_BACKGROUND, SEMI_BOLD, WHITE } from "@/src/styles/constants";
import { raleway } from "@/src/app/layout";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  paddingBottom: "20px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const Container = styled(MuiContainer)<{ bg: string }>(({ bg }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  padding: "45px 25px",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
    marginBottom: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  marginTop: "5px",
  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
    padding: "0 50px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    padding: "0 50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    padding: "0",
  },
}));
