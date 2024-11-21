"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

import {
  BLACK,
  GREEN,
  SEPARATOR_BACKGROUND,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { raleway } from "../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "30px 10px 30px 10px",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    flexWrap: "wrap",
    gap: "10px",
  },

  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    gap: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "20px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    padding: "0 5px",
  },
}));

export const CardsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",

  [theme.breakpoints.up("md")]: {
    gap: "20px",
  },

  [theme.breakpoints.down("md")]: {
    gap: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const CardBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px",

  [theme.breakpoints.up("md")]: {
    width: "48%",
  },

  [theme.breakpoints.down("md")]: {
    width: "49%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const CardContent = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: BLACK,
  borderRadius: "10px",
  padding: "30px",

  [theme.breakpoints.up("md")]: {
    minHeight: "420px",
  },

  [theme.breakpoints.down("md")]: {
    minHeight: "500px",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: "400px",
  },
}));

export const CardTitle = styled(MuiTypography)(() => ({
  color: GREEN,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  fontSize: "20px",
  margin: "10px 0",
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "start",

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));
