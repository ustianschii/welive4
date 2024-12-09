"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";

import { raleway } from "@/src/app/layout";

export const Box = styled(MuiBox)(({ theme }) => ({
  margin: "20px",

  [theme.breakpoints.up("md")]: {
    padding: "0 100px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 20px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0",
    padding: "0 10px",
  },
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  margin: "0 10px 10px 10px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
