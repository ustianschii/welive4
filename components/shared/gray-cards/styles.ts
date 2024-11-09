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

export const CardBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  marginTop: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const CardContent = styled(MuiBox)(({ theme }) => ({
  margin: "0 40px 10px 40px",

  [theme.breakpoints.up("md")]: {
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
    padding: "30px 0 30px 30px",
    borderLeft: "5px solid",
    borderColor: GREEN,
    borderRadius: "5px",
  },

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  margin: "20px 0",

  [theme.breakpoints.up("md")]: {
    textAlign: "start",
    fontSize: "40px",
  },
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
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    textAlign: "start",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  border: "2px solid white",
  lineHeight: "120%",
  margin: "20px 0",

  [theme.breakpoints.up("md")]: {
    width: "300px",
    height: "60px",
    fontSize: "20px",
  },
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
