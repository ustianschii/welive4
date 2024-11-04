"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";

import {
  OUR_BRANDS_ICONS_BACKGROUND,
  BOLD,
  SEPARATOR_BACKGROUND,
  WHITE,
  BLOG_CARD_BACKGROUND,
} from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundColor: SEPARATOR_BACKGROUND,
    height: "300px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,

  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
    fontWeight: BOLD,
    textAlign: "center",
    padding: "35px 0",
  },
}));

export const Box = styled(MuiTypography)(({ theme }) => ({
  backgroundColor: BLOG_CARD_BACKGROUND,

  [theme.breakpoints.down("sm")]: {
    height: "40%",
  },
}));
