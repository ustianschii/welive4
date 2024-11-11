import { styled } from "@mui/material/styles";

import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

import {
  GREEN,
  SEPARATOR_BACKGROUND,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";

import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "30px 0",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  marginBottom: "20px",
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  border: "2px solid",
  borderColor: GREEN,
  padding: "5px 15px",
  marginTop: "40px",
  borderRadius: "10px",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));
