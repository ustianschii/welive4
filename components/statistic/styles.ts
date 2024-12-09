"use client";

import { styled } from "@mui/material/styles";

import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

import { opensans, raleway } from "@/src/app/layout";
import {
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
  GREEN,
} from "@/src/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      left: "10%",
      width: "80%",
      borderColor: GREEN,
      borderStyle: "solid",
    },
    "&::before": {
      top: 0,
      borderTopWidth: "0px",
    },
    "&::after": {
      bottom: 0,
      borderBottomWidth: "0px",
    },
    padding: "50px 30px",
    margin: "50px auto",
    boxShadow:
      "0 10px 10px rgba(0, 0, 0, 0.1), 0 -10px 10px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: { padding: "50px 30px" },

  [theme.breakpoints.down("sm")]: { padding: "30px 20px" },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    margin: "30px 70px 50px 70px ",
    fontSize: "15px",
  },
  [theme.breakpoints.down("md")]: {
    margin: "30px 10px 50px 10px ",
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0 50px 0 ",
    fontSize: "14px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  border: "2px solid white",
  lineHeight: "120%",
  height: "40px",
  fontSize: "14px",

  [theme.breakpoints.up("md")]: {
    width: "300px",
  },
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px",
  },
}));
