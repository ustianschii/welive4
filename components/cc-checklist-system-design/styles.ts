"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";
import { GREEN } from "@/styles/constants";

export const FormBox = styled(MuiBox)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "20px",
  border: "2px solid",
  borderColor: GREEN,

  [theme.breakpoints.up("lg")]: {
    width: "900px",
    maxHeight: "1200px",
  },

  [theme.breakpoints.down("lg")]: {
    width: "600px",
    maxHeight: "1250px",
  },

  [theme.breakpoints.down("md")]: {
    width: "600px",
    maxHeight: "1250px",
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
    maxHeight: "1420px",
  },
}));
