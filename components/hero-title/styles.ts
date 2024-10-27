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
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    marginBottom: "15px",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "1.2",
    fontFamily: opensans.style.fontFamily,
    fontWeight: SEMI_BOLD,
  },
}));

export const Highlighted = styled("span")(({ theme }) => ({
  color: GREEN,
  [theme.breakpoints.down("sm")]: {
    marginLeft: "6px",
    marginRight: "6px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    textAlign: "center",
    height: "160px",
    fontSize: "40px",
    lineHeight: "1.1",
    fontFamily: opensans.style.fontFamily,
    fontWeight: SEMI_BOLD,
  },
}));
