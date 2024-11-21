"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Container as MuiContainer,
  Box as MuiBox,
} from "@mui/material";
import { ARTICLE_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "../../../src/app/layout";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    backgroundColor: ARTICLE_BACKGROUND,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: ARTICLE_BACKGROUND,
  [theme.breakpoints.up("md")]: {
    padding: "30px 0",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 0",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  color: WHITE,
  [theme.breakpoints.up("md")]: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "10px",
    fontSize: "25px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  color: WHITE,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    margin: "10px",
    fontSize: "16px",
    padding: "0 150px",
  },

  [theme.breakpoints.down("md")]: {
    margin: "5px",
    fontSize: "15px",
    padding: "0 50px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "0 10px",
  },
}));
