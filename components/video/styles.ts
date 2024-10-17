import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

import { GREEN, LIGHT_GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";

import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: LIGHT_GRAY,
  [theme.breakpoints.down("sm")]: {
    padding: "30px 0",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
    fontSize: "18px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    fontFamily: opensans.style.fontFamily,
    fontSize: "15px",
    fontWeight: SEMI_BOLD,
    border: "2px solid",
    borderColor: GREEN,
    padding: "5px 15px",
    marginTop: "40px",
    borderRadius: "7px",
  },
}));
