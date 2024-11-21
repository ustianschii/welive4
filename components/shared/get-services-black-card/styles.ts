"use client";

import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  Button as MuiButton,
  Container as MuiContainer,
} from "@mui/material";

import {
  WHITE,
  BLACK,
  GREEN,
  SEMI_BOLD,
  MAIN_SERVICES_BACKGROUND,
} from "@/styles/constants";
import { opensans } from "../../../src/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: BLACK,
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",

  [theme.breakpoints.up("md")]: {
    width: "95%",
    gap: "20px",
    justifyContent: "center",
  },

  [theme.breakpoints.down("md")]: {
    width: "90%",
    gap: "10px",
    justifyContent: "space-between",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "0",
  },
}));

export const CardBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: BLACK,
  padding: "30px 20px",
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",

  position: "relative",

  [theme.breakpoints.up("md")]: {
    width: "32%",
    minHeight: "700px",
  },
  [theme.breakpoints.down("md")]: {
    width: "49%",
    minHeight: "720px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: "20px",
    minHeight: "740px",
  },
}));

export const Board = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  borderRadius: "10px",
  padding: "20px",
  justifyContent: "flex-end",

  [theme.breakpoints.up("md")]: {
    minHeight: "180px",
    minWidth: "100%",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "140px",
    minWidth: "100%",
  },
}));

export const ImageContainer = styled(MuiBox)(() => ({
  flexBasis: "50%",
  display: "flex",
  alignItems: "center",
}));

export const TextContainer = styled(MuiBox)(({ theme }) => ({
  flexBasis: "50%",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    padding: "0 5px",
  },
}));

export const CardButtonsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  bottom: "20px",

  [theme.breakpoints.up("md")]: {
    padding: "0 20px",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 10px",
  },
}));

export const ButtonsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    padding: "20px 10px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

export const BackButton = styled(MuiButton)(() => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  fontSize: "18px",
  padding: "5px 30px",
}));
