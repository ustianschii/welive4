"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { LIGHT_BLACK, WHITE } from "@/styles/constants";
import { raleway } from "../../src/app/layout";

export const Container = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  backgroundColor: LIGHT_BLACK,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",

  [theme.breakpoints.up("md")]: {
    minHeight: "200px",
  },

  [theme.breakpoints.down("md")]: {
    minWidth: "50%",
    minHeight: "200px",
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: "150px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  lineHeight: "1.3",

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
    padding: "50px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    padding: "0 100px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "0 20px",
  },
}));
