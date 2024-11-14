"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { SEPARATOR_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiBox)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  textAlign: "center",
  padding: "35px 0",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",

  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  marginTop: "20px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    maxWidth: "1250px",
    gap: "30px",
    marginTop: "50px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "15px",
    gap: "30px",
  },
  [theme.breakpoints.down("sm")]: {},
}));
