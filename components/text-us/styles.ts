import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";
import {
  GREEN,
  WHITE,
  MAIN_BACKGROUND_GRAY,
  BOLD,
  TEXT_US_BACKGROUND,
  SEMI_BOLD,
} from "@/styles/constants";
import { raleway, opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_BACKGROUND_GRAY,
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
  },
}));

export const BannerContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: TEXT_US_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  [theme.breakpoints.down("sm")]: {
    padding: "100px 15px",
    borderRadius: "10px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    margin: "25px 0",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    height: "50px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "18px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "2px solid white",
  },
}));
