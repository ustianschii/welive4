"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
  REGULAR,
} from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: REGULAR,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
    padding: "30px 0 20px 0",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "21px",
    padding: "30px 0 20px 0",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    padding: "0 200px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: "0 10px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  padding: "30px 10px",

  [theme.breakpoints.down("md")]: {
    gap: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}));
