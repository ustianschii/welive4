"use client";

import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

import { SEPARATOR_BACKGROUND } from "@/styles/constants";

export const Container = styled(MuiContainer)<{
  flex: string;
  maxw: string;
  gap: string;
}>(({ theme, flex, maxw }) => ({
  display: "flex",
  backgroundColor: SEPARATOR_BACKGROUND,
  flexWrap: "wrap",

  [theme.breakpoints.up("md")]: {
    padding: "40px 20px",
    "& > *": {
      flex: flex,
      maxWidth: maxw,
    },
    justifyContent: "space-between",
    gap: "10px",
  },
  [theme.breakpoints.down("md")]: {
    gap: "10px",
    padding: "40px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
