"use client";

import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  Typography as MuiTypography,
  List as MuiList,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { opensans } from "@/src/app/layout";
import { MAIN_SERVICES_BACKGROUND, GREEN, WHITE } from "@/src/styles/constants";

export const CardBox = styled(MuiBox)(({ theme }) => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  [theme.breakpoints.up("md")]: {
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    width: "49%",
    padding: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.up("md")]: {
    marginTop: "10px",
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const CustomList = styled(MuiList)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "30px",
  },
}));

export const Feature = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.3",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export const Dot = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: "white",
  marginRight: "10px",
  marginTop: "6px",
  [theme.breakpoints.down("md")]: {
    fontSize: "7px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "6px",
  },
}));
