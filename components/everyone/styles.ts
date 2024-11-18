"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";

import {
  GREEN,
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { opensans } from "../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0",
    display: "flex",
    flexDirection: "row-reverse",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 50px",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px",
  },
}));

export const TitleBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "700px",
  },
}));

export const BorderBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "700px",
    position: "relative",
    borderLeft: "5px solid",
    borderColor: GREEN,
    marginLeft: "100px",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "50%",
      height: "5px",
      backgroundColor: GREEN,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
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
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "45px",
    transform: "rotate(90deg)",
    marginLeft: "10px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "35px",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    marginTop: "0",
    width: "40%",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}));
