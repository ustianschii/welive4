"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

import {
  SEPARATOR_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  WHITE,
  OUR_BRANDS_ICONS_BACKGROUND,
} from "@/src/styles/constants";
import { opensans, raleway } from "../../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "0  10px 20px 10px",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    padding: "0  10px 40px 10px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

export const CardsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  marginTop: "20px",

  [theme.breakpoints.up("md")]: {
    flexWrap: "wrap",
    gap: "10px",
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    gap: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "10px",
  },
  "& > :nth-last-child(1):nth-child(odd)": {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export const Card = styled(MuiBox)<{
  border: string;
  bgcolor?: string;
  upmdwidth: string;
}>(({ theme, border, bgcolor, upmdwidth }) => ({
  display: "flex",
  backgroundColor: bgcolor ?? OUR_BRANDS_ICONS_BACKGROUND,
  border: border ?? "",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    borderRadius: "10px",
    padding: "20px",
    width: upmdwidth,
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: "10px",
    padding: "25px",
    width: "49%",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "10px",
    width: "100%",
  },
}));

export const CardTitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",
  fontSize: "18px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "start",
  marginTop: "10px",

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
