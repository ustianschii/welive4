"use client";
import { styled } from "@mui/material/styles";
import { GREEN, SEMI_BOLD } from "../../src/styles/constants";
import { raleway } from "@/app/layout";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";

export const HeaderTextBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "220px",
    marginTop: "120px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    height: "30px",
    marginBottom: "15px",
    justifyContent: "center",
    fontSize: "20px",
    fontFamily: raleway.style.fontFamily,
    fontWeight: SEMI_BOLD,
  },
}));

export const Highlighted = styled("span")(({}) => ({
  color: GREEN,
  marginLeft: "0.25em",
  marginRight: "0.25em",
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    textAlign: "center",
    height: "160px",
    fontSize: "40px",
    lineHeight: "110%",
    fontFamily: raleway.style.fontFamily,
    fontWeight: SEMI_BOLD,
  },
}));
