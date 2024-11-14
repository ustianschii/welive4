"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";

import {
  BOLD,
  GREEN,
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { opensans, raleway } from "../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    padding: "10px 0",
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
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "37px",
    padding: "20px 0",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    padding: "35px 0",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    padding: "35px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    marginBottom: "10px",
    padding: "0 100px",
    fontSize: "18px",
  },

  [theme.breakpoints.down("md")]: {
    marginBottom: "25px",
    padding: "0 30px",
    fontSize: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "25px",
    padding: "0 10px",
    fontSize: "14px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "30px 20px",
  },
  [theme.breakpoints.down("md")]: {
    gap: "20px",
    padding: "30px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    padding: "30px 10px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  lineHeight: "120%",
  border: "2px solid white",
  margin: "0 auto 35px auto",
  height: "50px",

  [theme.breakpoints.up("md")]: {
    width: "300px",
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    width: "300px",
    fontSize: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "250px",
    fontSize: "16px",
  },
}));
