"use client";
import { styled } from "@mui/material/styles";
import { opensans } from "../../src/app/layout";
import { GREEN, SEMI_BOLD } from "../../src/styles/constants";

import {
  Box as MuiBox,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";

export const HeaderTextBox = styled(MuiBox)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    marginTop: "200px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "150px",
  },
}));

export const Title = styled(MuiTypography)<TypographyProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.2",

  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
    marginBottom: "25px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "23px",
    marginBottom: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

export const Highlighted = styled("span")<{ mLeft?: string; mRight?: string }>(
  ({ mLeft = "6px", mRight = "6px" }) => ({
    color: GREEN,
    marginLeft: mLeft,
    marginRight: mRight,
    display: "inline",
    wordWrap: "break-word",
    whiteSpace: "normal",
  })
);

export const Subtitle = styled(MuiTypography)<TypographyProps>(({ theme }) => ({
  lineHeight: "1.1",
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  textAlign: "center",
  whiteSpace: "normal",

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
    padding: "0 150px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    padding: "0 70px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    padding: "0 10px",
  },
}));
