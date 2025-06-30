"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";

import { GREEN } from "@/src/styles/constants";

export const FormBox = styled(MuiBox)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "20px",
  border: "2px solid",
  borderColor: GREEN,

  [theme.breakpoints.up("lg")]: {
    width: "900px",
    maxHeight: "1950px",
  },

  [theme.breakpoints.down("lg")]: {
    width: "600px",
    maxHeight: "2020px",
  },

  [theme.breakpoints.down("md")]: {
    width: "600px",
    maxHeight: "2020px",
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
    maxHeight: "2220px",
  },
}));
