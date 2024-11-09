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

  [theme.breakpoints.up("md")]: {
    width: "100%",
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    height: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontWeight: BOLD,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "50px",
    padding: "40px 0",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "50px",
    padding: "40px 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
    padding: "35px 0",
  },
}));

export const BrandsBox = styled(MuiTypography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  whiteSpace: "no-wrap",
  backgroundColor: BLOG_CARD_BACKGROUND,
  padding: "10px",
  "::-webkit-scrollbar": { display: "none" },
  scrollBehavior: "smooth",
  overflowX: "auto",

  [theme.breakpoints.up("md")]: {
    height: "150px",
  },
  [theme.breakpoints.down("md")]: {
    height: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "120px",
  },
}));

export const BrandsImages = styled(Image)(({ theme }) => ({
  width: "auto",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    margin: "0 auto",
  },
  [theme.breakpoints.down("md")]: {
    margin: "0 30px",
  },

  [theme.breakpoints.down("sm")]: {
    margin: "0 30px",
  },
}));
