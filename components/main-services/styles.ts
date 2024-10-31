"use client";

import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    minHeight: "900px",
    backgroundColor: MAIN_SERVICES_BACKGROUND,
    padding: "50px 10px",
    "& > *": {
      flex: "1 1 calc(50% - 10px)",
    },
  },
}));
