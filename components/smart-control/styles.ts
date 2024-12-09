"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import { opensans } from "../../src/app/layout";
import {
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
  REGULAR,
  GREEN,
} from "@/src/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "0 10px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

export const TitleBox = styled(MuiContainer)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    width: "30%",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const BorderBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    position: "relative",
    borderRight: "5px solid",
    borderColor: GREEN,
    padding: "110px 20px",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      width: "50%",
      height: "5px",
      backgroundColor: GREEN,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "50%",
      height: "5px",
      backgroundColor: GREEN,
    },
    borderRadius: "5px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontWeight: SEMI_BOLD,
    fontSize: "25px",
    textAlign: "end",
  },
  [theme.breakpoints.down("md")]: {
    fontWeight: REGULAR,
    fontSize: "25px",
    padding: "30px 0 20px 0",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "21px",
    padding: "30px 0 20px 0",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
    marginTop: "10px",
    textAlign: "end",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    padding: "0 200px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: "0 10px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    width: "70%",
    padding: "50px 50px",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "30px 20px",
    gap: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "20px",
  },
}));
