"use client";
import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
  Button as MuiButton,
} from "@mui/material";
import { BLACK, BOLD, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: BLACK,
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "50px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "20px",
  },
}));

export const FastLinks = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    marginBottom: "100px",
  },
}));

export const LinksColumn = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    marginBottom: "10px",
  },
}));

export const LinksContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    gap: "5px",
  },
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  textAlign: "center",
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {},
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "50%",
    height: "60px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "16px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "2px solid white",
    margin: "0 auto 35px auto",
  },
}));

export const AdressBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    marginBottom: "10px",
  },
}));

export const Adress = styled(MuiTypography)(({ theme }) => ({
  display: "flex",
  color: WHITE,
  alignItems: "center",
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));

export const Copyright = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    marginTop: "10px",
  },
}));
