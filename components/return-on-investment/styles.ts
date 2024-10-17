import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import { DARK_GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

import Image from "next/image";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: DARK_GRAY,
  height: "content-fit",
  [theme.breakpoints.down("sm")]: {},
}));
export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    marginTop: "50px",
    lineHeight: "110%",
    fontWeight: SEMI_BOLD,
  },
}));
export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
    marginTop: "10px",
  },
}));
export const Card = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
  },
}));
export const Icon = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0",
  },
}));
export const IconTitle = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
export const Descriptions = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "15px",
  },
}));
export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  color: WHITE,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
    fontSize: "14px",
  },
}));
