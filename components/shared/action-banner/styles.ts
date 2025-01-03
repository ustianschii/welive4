"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
  Box as MuiBox,
  ButtonProps,
} from "@mui/material";

import { SEMI_BOLD, WHITE } from "@/src/styles/constants";
import { opensans, raleway } from "@/src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  padding: "30px 10px",
  minHeight: "200px",

  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${"/action-banner/action-banner-bg.png"})`,
    backgroundPosition: "center",
    backgroundRepeate: "no-repeat",
    backgroundSize: "cover",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  color: WHITE,

  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },
}));

export const ButtonsWrapper = styled(MuiBox)(({ theme }) => ({
  marginTop: "20px",
  [theme.breakpoints.up("md")]: {
    padding: "0 100px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 50px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

export const Button = styled(MuiButton)<ButtonProps>(() => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  border: "2px solid white",
  width: "100%",
  fontSize: "14px",
  padding: "5px 15px",
}));
