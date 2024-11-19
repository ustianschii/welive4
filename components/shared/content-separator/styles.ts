"use client";
import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";

import { SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "../../../src/app/layout";

export const Container = styled(MuiContainer)<{
  bg?: string;
  tabletbg?: string;
  containerpadding?: string;
}>(({ theme, bg, tabletbg, containerpadding }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  backgroundPostion: "center",
  backgroundSize: "cover",
  padding: containerpadding,
  [theme.breakpoints.up("lg")]: {
    maxHeight: "250px",
  },
  [theme.breakpoints.up("md")]: {
    maxHeight: "200px",
  },
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${tabletbg})`,
    maxHeight: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundImage: `url(${bg})`,
    maxHeight: "120px",
  },
}));

export const Title = styled(MuiTypography)<{
  titlepadding?: string;
}>(({ titlepadding, theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  padding: titlepadding,
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    padding: "0 10px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.4",
  textAlign: "center",
  margin: "10px 0 20px 0",
  maxWidth: "75%",
  marginTop: "50px",

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));
