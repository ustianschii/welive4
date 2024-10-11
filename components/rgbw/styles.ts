import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";
import { BOLD, DARK_GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";
import { raleway, opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundColor: DARK_GRAY,
    height: "900px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "start",

  [theme.breakpoints.down("sm")]: {
    margin: "25px 40px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "60px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "16px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "1px solid white",
    marginBottom: "10px",
  },
}));
