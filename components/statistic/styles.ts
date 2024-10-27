import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";
import {
  MAIN_SERVICES_BACKGROUND,
  SEMI_BOLD,
  WHITE,
  BOLD,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundColor: MAIN_SERVICES_BACKGROUND,
    height: "550px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    padding: "35px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    marginBottom: "50px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "60px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "16px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "2px solid white",
  },
}));
