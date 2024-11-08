import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import { MAIN_SERVICES_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

import Image from "next/image";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  [theme.breakpoints.down("sm")]: {},
}));
export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  marginTop: "30px",
  lineHeight: "110%",
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
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
  },
}));

export const Card = styled(MuiBox)<{ index: number }>(({ theme, index }) => ({
  marginBottom: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
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

export const IconTitle = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  color: WHITE,
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Descriptions = styled(MuiContainer)(() => ({
  marginTop: "15px",
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
