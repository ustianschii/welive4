"use client";
import { styled } from "@mui/material/styles";
import { GREEN, SEMI_BOLD } from "../../src/styles/constants";
import { opensans } from "@/app/layout";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";

export const HeaderTextBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "220px",
    marginTop: "150px",
  },
  [theme.breakpoints.down("md")]: {
    height: "220px",
    marginTop: "150px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
    marginBottom: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    lineHeight: "1.2",
    marginBottom: "25px",
    fontSize: "18px",
    padding: "0 20px",
  },
}));

export const Highlighted = styled("span")<{ mLeft?: string; mRight?: string }>(
  ({ theme, mLeft = "6px", mRight = "6px" }) => ({
    color: GREEN,
    marginLeft: mLeft,
    marginRight: mRight,
    [theme.breakpoints.down("sm")]: {},
  })
);

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  lineHeight: "1.1",
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: "60px",
    padding: "0 70px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "33px",
    padding: "0 20px",
  },
}));
