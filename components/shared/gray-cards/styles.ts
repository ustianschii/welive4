"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

import {
  MAIN_SERVICES_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  WHITE,
} from "@/src/styles/constants";
import { opensans, raleway } from "../../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.up("lg")]: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  [theme.breakpoints.up("md")]: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },
}));

export const CardBox = styled(MuiBox, {
  shouldForwardProp: (prop) => prop !== "index",
})<{ index: number }>(({ theme, index }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  paddingTop: "30px",
  [theme.breakpoints.up("md")]: {
    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
  },
}));

export const CardContent = styled(MuiBox)(({ theme }) => ({
  margin: "0 20px 10px 20px",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      left: "0",
      width: "25%",
      borderColor: GREEN,
      borderStyle: "solid",
    },
    "&::before": {
      top: 0,
      borderTopWidth: "2px",
    },
    "&::after": {
      bottom: 0,
      borderBottomWidth: "2px",
    },
    position: "relative",
    padding: "20px 0 20px 30px",
    borderLeft: "5px solid",
    borderColor: GREEN,
    borderRadius: "5px",
    minWidth: "60%",
    maxWidth: "100%",
  },

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 20px",
  },
}));

export const ImageBox = styled(MuiBox, {
  shouldForwardProp: (prop) => prop !== "hasImage",
})<{ hasImage: boolean }>(({ theme, hasImage }) => ({
  position: "relative",
  width: "100%",
  display: hasImage ? "block" : "none",
  [theme.breakpoints.up("lg")]: {
    minHeight: "400px",
    minWidth: "600px",
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: "400px",
    minWidth: "350px",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "400px",
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "250px",
    width: "95%",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  margin: "20px 0",

  [theme.breakpoints.up("md")]: {
    textAlign: "start",
    fontSize: "30px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0px 50px",
    fontSize: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0px 30px",
    fontSize: "28px",
  },
}));

export const Subtitle = styled(MuiTypography)(() => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  fontSize: "20px",
  margin: "10px 0",
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
    textAlign: "center",
    padding: "0 100px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "0",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  border: "2px solid white",
  lineHeight: "120%",
  margin: "20px 0",
  height: "40px",
  fontSize: "14px",

  [theme.breakpoints.up("lg")]: {
    padding: "0 20px",
  },

  [theme.breakpoints.up("md")]: {
    minWidth: "250px",
  },
  [theme.breakpoints.down("md")]: {
    width: "250px",
  },
}));
