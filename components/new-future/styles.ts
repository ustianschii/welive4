"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  MAIN_SERVICES_BACKGROUND,
  SEPARATOR_BACKGROUND,
  SEMI_BOLD,
  WHITE,
  GREEN,
} from "@/src/styles/constants";
import { raleway } from "@/src/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "30px 0",
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  paddingTop: "30px",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    borderRadius: "10px",
    boxShadow:
      "5px 5px 30px rgba(0, 0, 0, 0.2), -5px -5px 30px rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    padding: "50px 0",
  },
}));

export const ContentBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 0",

  [theme.breakpoints.up("md")]: {
    width: "50%",
    marginLeft: "20px",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      left: "0",
      width: "25%",
      borderColor: GREEN,
      borderStyle: "solid",
    },
    "&::before": {
      top: 0,
      borderTopWidth: "2px",
    },
    "&::after": {
      bottom: 0,
      borderBottomWidth: "2px",
    },
    position: "relative",
    padding: "20px 0 20px 0",
    borderLeft: "5px solid",
    borderColor: GREEN,
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
    padding: "0 40px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
    padding: "0 30px",
    marginBottom: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    padding: "0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  padding: "0 40px",
  marginBottom: "10px",

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
    marginTop: "5px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    textAlign: "center",
    marginTop: "5px",
    padding: "0 100px",
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "start",
    fontSize: "14px",
    padding: "0 10px",
  },
}));
