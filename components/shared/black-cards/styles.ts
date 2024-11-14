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
} from "@/styles/constants";
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
    fontSize: "34px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "34px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
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
    padding: "25px",
    width: "100%",
  },
}));

export const CardTitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "start",

  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    fontSize: "14px",
  },

  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    fontSize: "14px",
  },
}));
