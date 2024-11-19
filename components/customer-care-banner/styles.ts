"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import {
  GREEN,
  WHITE,
  SUBMIT_FORM_BACKGROUND,
  BOLD,
  MAIN_SERVICES_BACKGROUND,
} from "@/styles/constants";
import { opensans, raleway } from "../../src/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
}));

export const BannerContainer = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",

  [theme.breakpoints.only("md")]: {
    width: "80%",
    padding: "30px",
  },

  [theme.breakpoints.up("lg")]: {
    width: "50%",
    padding: "30px",
  },

  [theme.breakpoints.down("md")]: {
    width: "90%",
    padding: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    padding: "20px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  fontSize: "15px",
  margin: "25px 0",
  [theme.breakpoints.down("sm")]: {},
}));

export const FeaturesBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "16px",
  [theme.breakpoints.down("sm")]: {},
}));

export const Feature = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid",
  borderColor: WHITE,
  flex: "0 0 calc(50% - 16px)",
  borderRadius: "5px",
  height: "50px",

  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const FeatureText = styled(MuiTypography)(({ theme }) => ({
  flexDirection: "column",
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "5px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: BOLD,
  fontSize: "22px",
  margin: "20px",
  [theme.breakpoints.down("sm")]: {},
}));

export const Address = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const WorkingHours = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));
