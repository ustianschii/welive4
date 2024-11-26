"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";

export const FormBox = styled(MuiBox)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "20px",

  [theme.breakpoints.up("lg")]: {
    minWidth: "50%",
    maxHeight: "2350px",
  },

  [theme.breakpoints.down("lg")]: {
    minWidth: "60%",
    maxHeight: "2350px",
  },

  [theme.breakpoints.down("md")]: {
    minWidth: "60%",
    maxHeight: "2470px",
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
    maxHeight: "2710px",
  },
}));
