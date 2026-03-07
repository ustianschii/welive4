"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Accordion as MuiAccordion,
} from "@mui/material";

import { SEPARATOR_BACKGROUND, WHITE, GREEN } from "@/src/styles/constants";
import { opensans, raleway } from "@/src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "30px 50px",
  [theme.breakpoints.down("lg")]: {
    padding: "30px 100px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 50px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
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

export const Question = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})<{ isExpanded?: boolean }>(({ isExpanded }) => ({
  color: isExpanded ? GREEN : WHITE,
  fontFamily: opensans.style.fontFamily,
  transition: "color 0.3s ease",
}));

export const Answer = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
}));

export const Title = styled("h2")(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: 600,
  lineHeight: "1.1",
  textAlign: "center",
  margin: "0 auto",
  paddingLeft: "50px",
  paddingRight: "50px",
  paddingTop: "40px",
  paddingBottom: "30px",
  maxWidth: "1280px",

  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "50px",
    paddingRight: "50px",
    fontSize: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: "10px",
    paddingRight: "10px",
    fontSize: "28px",
  },
}));
