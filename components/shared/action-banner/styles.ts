import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

import { SEMI_BOLD, WHITE } from "@/styles/constants";

import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundImage: `url(${"/action-banner/action-banner-bg.png"})`,
  backgroundPosition: "center",
  [theme.breakpoints.down("sm")]: {
    minHeight: "280px",
    paddingTop: "30px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    fontSize: "29px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontFamily: opensans.style.fontFamily,
    fontSize: "15px",
    fontWeight: SEMI_BOLD,
    border: "2px solid white",
    padding: "5px 15px",
  },
}));
