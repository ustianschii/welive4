"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";
import { raleway } from "../../../src/app/layout";

export const Box = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    margin: "20px",
    padding: "0 200px",
  },
  [theme.breakpoints.down("md")]: {
    margin: "20px ",
    padding: "0 100px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "20px ",
    padding: "0",
  },
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  margin: "0 10px 10px 10px",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
