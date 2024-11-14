"use client";
import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
  Button as MuiButton,
} from "@mui/material";

import Image from "next/image";

import { BLACK, BOLD, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "../../../src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: BLACK,

  [theme.breakpoints.down("md")]: {
    padding: "0 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 20px",
  },
}));

export const GroupBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const Logo = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "270px",
    height: "150px",
  },
  [theme.breakpoints.down("md")]: {
    width: "370px",
    height: "150px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "270px",
    height: "150px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
    textAlign: "start",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const FastLinks = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.up("md")]: {
    width: "70%",
  },

  [theme.breakpoints.down("md")]: {
    width: "80%",
    margin: "50px 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70%",
    margin: "50px 0",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  marginBottom: "10px",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const LinksContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",

  "&.second": {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  textAlign: "center",
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  lineHeight: "120%",
  border: "2px solid white",
  margin: "0 auto 35px auto",
  height: "50px",

  [theme.breakpoints.up("md")]: {
    width: "250px",
    fontSize: "18px",
    marginTop: "50px",
  },

  [theme.breakpoints.down("md")]: {
    width: "250px",
    fontSize: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "200px",
    fontSize: "16px",
  },
}));

export const AdressBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  color: WHITE,
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {},
}));

export const Adress = styled(MuiTypography)(({ theme }) => ({
  display: "flex",
  color: WHITE,
  alignItems: "center",
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));

export const Copyright = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  margin: "10px 0 30px 0",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));
