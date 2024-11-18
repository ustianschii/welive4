"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";

import { GRAY, MAIN_SERVICES_BACKGROUND, WHITE } from "@/styles/constants";
import { opensans, raleway } from "../../src/app/layout";

export const Container = styled(MuiBox)(({ theme }) => ({
  position: "relative",
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.up("md")]: {
    minHeight: "230px",
    padding: "10px 10px",
  },

  [theme.breakpoints.down("md")]: {
    minHeight: "300px",
    padding: "10px 10px",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: "300px",
    padding: "10px 10px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",
  padding: "15px 0",

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "23px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Review = styled(MuiTypography)(({ theme }) => ({
  color: GRAY,
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    marginBottom: "40px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
    marginBottom: "40px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginBottom: "40px",
  },
}));
