"use client";

import { styled } from "@mui/material/styles";
import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";

import Image from "next/image";

import {
  BOLD,
  SEPARATOR_BACKGROUND,
  WHITE,
  BLOG_CARD_BACKGROUND,
} from "@/styles/constants";

export const Container = styled(MuiBox)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    width: "100%",
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    height: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "250px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontWeight: BOLD,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
    padding: "40px 0",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
    padding: "20px 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: "25px 0",
  },
}));

export const BrandsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  whiteSpace: "nowrap",
  padding: "10px",
  "::-webkit-scrollbar": { display: "none" },
  scrollBehavior: "smooth",

  "@keyframes scroll-infinite": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },

  [theme.breakpoints.up("md")]: {
    animation: "scroll-infinite 20s linear infinite",
    display: "flex",
    justifyContent: "space-between",
    height: "150px",
  },

  [theme.breakpoints.down("md")]: {
    backgroundColor: BLOG_CARD_BACKGROUND,
    height: "200px",
    overflowX: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    height: "120px",
  },
}));

export const BrandsImages = styled(Image)(({ theme }) => ({
  width: "auto",
  height: "auto",

  [theme.breakpoints.up("md")]: {
    margin: "0 30px",
  },
  [theme.breakpoints.down("md")]: {
    margin: "0 30px",
  },
}));
