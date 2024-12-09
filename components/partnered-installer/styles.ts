"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  ARTICLE_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  WHITE,
} from "@/src/styles/constants";
import { opensans, raleway } from "@/src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: ARTICLE_BACKGROUND,

  [theme.breakpoints.up("md")]: {
    padding: "30px 15px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 15px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 15px",
  },
}));

export const LogoWrapper = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row-reverse",
    gap: "20px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  textAlign: "center",
  fontSize: "30px",
  lineHeight: "1.2",
  [theme.breakpoints.up("md")]: {
    marginTop: "30px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  marginTop: "10px",

  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
    padding: "0 100px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  textAlign: "center",
  backgroundColor: WHITE,
  textTransform: "uppercase",
  width: "100%",
  margin: "30px 0",

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
