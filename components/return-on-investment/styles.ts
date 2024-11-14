"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import { SEPARATOR_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "../../src/app/layout";

import Image from "next/image";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("sm")]: {},
}));
export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  marginTop: "30px",
  lineHeight: "110%",
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
  },
}));
export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  marginTop: "10px",
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
  },
}));

export const CardsBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const Card = styled(MuiBox)<{ index: number }>(({ theme, index }) => ({
  marginBottom: "30px",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    marginTop: "30px",
    flexDirection: "column",
  },

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    marginTop: "30px",
    flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const Icon = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    margin: "0 70px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0",
  },
}));

export const TabletBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    margin: "0 50px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0",
    width: "100%",
  },
}));

export const IconWrapper = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    minHeight: "200px",
  },
}));

export const IconTitle = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  color: WHITE,

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    marginTop: "30px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Descriptions = styled(MuiContainer)(({ theme }) => ({
  marginTop: "15px",

  [theme.breakpoints.up("md")]: {
    marginTop: "30px",
    padding: "0 30px",
  },
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  color: WHITE,
  textAlign: "center",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
