"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";
import {
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
  BOLD,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: { padding: "50px 30px" },

  [theme.breakpoints.down("sm")]: { padding: "30px 20px" },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    margin: "30px 0 50px 0 ",
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0 50px 0 ",
    fontSize: "15px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  border: "2px solid white",
  lineHeight: "120%",

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
