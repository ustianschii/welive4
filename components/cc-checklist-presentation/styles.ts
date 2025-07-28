"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";

export const FormBox = styled(MuiBox)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "20px",
  maxHeight: "1050px",

  [theme.breakpoints.up("lg")]: {
    minWidth: "50%",
  },

  [theme.breakpoints.down("lg")]: {
    minWidth: "60%",
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
}));
