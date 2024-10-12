import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
} from "@mui/material";
import { BOLD, DARK_GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: DARK_GRAY,
    height: "5content-fit",
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
    padding: "35px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    marginBottom: "25px",
    padding: "0 10px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "30px 10px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "75%",
    height: "60px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "16px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "2px solid white",
    margin: "0 auto 35px auto",
  },
}));
