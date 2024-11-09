"use client";

import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  flexWrap: "wrap",

  [theme.breakpoints.up("md")]: {
    padding: "50px 10px",
    "& > *": {
      flex: "1 1 calc(25% - 10px)",
    },
    gap: "20px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "50px 10px",
    "& > *": {
      flex: "1 1 calc(50% - 10px)",
    },
    gap: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 10px",
    "& > *": {},
    gap: "10px",
  },
}));
