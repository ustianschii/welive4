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
  borderRadius: "20px",

  [theme.breakpoints.up("lg")]: {
    width: "900px",
    padding: "30px",
  },

  [theme.breakpoints.down("lg")]: {
    width: "600px",
    padding: "30px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    padding: "20px 20px 40px 20px",
  },
}));

export const Subtitle = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  fontSize: "15px",
  margin: "25px 0",
}));

export const FeaturesBox = styled(MuiBox)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "16px",
}));

export const Feature = styled(MuiBox)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid",
  borderColor: WHITE,
  flex: "0 0 calc(50% - 16px)",
  borderRadius: "5px",
  height: "50px",
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
  textAlign: "center",
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
