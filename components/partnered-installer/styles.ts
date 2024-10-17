import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";
import { BRIGHT_GREEN, GREEN, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: BRIGHT_GREEN,

  [theme.breakpoints.down("sm")]: {
    padding: "30px 15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "1.2",
    marginBottom: "20px",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: GREEN,
  fontFamily: opensans.style.fontFamily,
  textAlign: "center",
  backgroundColor: WHITE,
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "30px 0",
    padding: "0 10px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    // lineHeight: "1.2",
    marginBottom: "10px",
  },
}));
