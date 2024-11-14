"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Accordion as MuiAccordion,
} from "@mui/material";

import { SEPARATOR_BACKGROUND, WHITE } from "@/styles/constants";
import { opensans } from "../../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "30px 0",

  [theme.breakpoints.down("sm")]: {},
}));

export const Accordion = styled(MuiAccordion)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  "&:before": {
    display: "none",
  },
  margin: "0 !important",
  boxShadow: "none",

  [theme.breakpoints.down("sm")]: {},
}));

export const Question = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Answer = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {},
}));
