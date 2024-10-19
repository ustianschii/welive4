import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

import {
  DARK_GRAY,
  GREEN,
  LIGHT_GRAY,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: LIGHT_GRAY,
  [theme.breakpoints.down("sm")]: {
    paddingTop: "30px",
  },
}));

export const CardBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: DARK_GRAY,

  [theme.breakpoints.down("sm")]: {
    padding: "30px 0 50px 0",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: "35px 30px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "10px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "start",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
    fontSize: "15px",
  },
}));
