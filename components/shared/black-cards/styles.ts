import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

import {
  SEPARATOR_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  WHITE,
  OUR_BRANDS_ICONS_BACKGROUND,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,

  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px 30px 10px",
  },
}));

export const CardBox = styled(MuiBox)<{ border: string; bgcolor?: string }>(
  ({ theme, border, bgcolor }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: bgcolor ?? OUR_BRANDS_ICONS_BACKGROUND,
    border: border ?? "",

    [theme.breakpoints.down("sm")]: {
      borderRadius: "10px",
      padding: "25px",
      marginBottom: "10px",
    },
  })
);

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    marginBottom: "30px",
  },
}));

export const CardTitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.1",

  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
    paddingBottom: "20px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "start",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
    fontSize: "14px",
  },
}));
