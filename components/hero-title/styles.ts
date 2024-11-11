"use client";
import { styled } from "@mui/material/styles";
import { GREEN, REGULAR, SEMI_BOLD } from "../../src/styles/constants";
import { opensans } from "@/app/layout";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";

export const HeaderTextBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
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
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.2",

  [theme.breakpoints.up("md")]: {
    fontWeight: REGULAR,
    fontSize: "27px",
    marginBottom: "25px",
    marginTop: "150px",
  },

  [theme.breakpoints.down("md")]: {
    fontWeight: SEMI_BOLD,
    fontSize: "23px",
    marginBottom: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    padding: "0 20px",
  },
}));

export const Highlighted = styled("span")<{ mLeft?: string; mRight?: string }>(
  ({ mLeft = "6px", mRight = "6px" }) => ({
    color: GREEN,
    marginLeft: mLeft,
    marginRight: mRight,
  })
);

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  lineHeight: "1.1",
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
    margin: "50px 0 0 0",
    padding: "0 70px",
    marginTop: "100px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
    padding: "0 70px",
    marginTop: "100px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "33px",
    padding: "0 20px",
  },
}));
