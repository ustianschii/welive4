"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import { SEPARATOR_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: "35px 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "35px 0",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    padding: "15px",
    gap: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
    gap: "30px",
  },
}));
