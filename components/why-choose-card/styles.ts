"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { LIGHT_BLACK, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  backgroundColor: LIGHT_BLACK,
  justifyContent: "center",
  alignItems: "center",
  minWidth: "50%",
  borderRadius: "10px",

  [theme.breakpoints.down("md")]: {
    minHeight: "200px",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: "150px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  lineHeight: "1.1",

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));
