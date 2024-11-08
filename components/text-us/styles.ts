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
  SEPARATOR_BACKGROUND,
  BOLD,
  SUBMIT_FORM_BACKGROUND,
  SEMI_BOLD,
} from "@/styles/constants";
import { raleway, opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("md")]: {
    padding: "20px 25px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
  },
}));

export const BannerContainer = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  padding: "100px 15px",
  borderRadius: "10px",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  margin: "20px 0",
  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontSize: "18px",
  lineHeight: "120%",
  fontWeight: BOLD,
  border: "2px solid white",

  [theme.breakpoints.down("md")]: {
    width: "70%",
    height: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "50px",
  },
}));
