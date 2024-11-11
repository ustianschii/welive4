import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Container as MuiContainer,
  Box as MuiBox,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { SEPARATOR_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "35px 0",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    minHeight: "500px",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "850px",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "850px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  fontSize: "35px",
  marginBottom: "20px",

  [theme.breakpoints.up("md")]: {
    fontSize: "27px",
    whiteSpace: "nowrap",
  },

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));

export const Dot = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: "white",
  marginRight: "10px",
  marginTop: "6px",

  [theme.breakpoints.up("md")]: {
    fontSize: "7px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "7px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "6px",
    margin: "10px 0 0 10px",
  },
}));

export const Feature = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.2",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
    maxWidth: "450px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "0 20px",
  },
}));
