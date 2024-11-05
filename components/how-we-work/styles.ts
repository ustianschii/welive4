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
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "37px",
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

  [theme.breakpoints.down("md")]: {
    marginBottom: "25px",
    padding: "0 10px",
    fontSize: "20px",
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

  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "60px",
    fontSize: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "250px",
    height: "50px",
    fontSize: "16px",
  },
}));
