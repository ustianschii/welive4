"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Container as MuiContainer,
} from "@mui/material";

import Image from "next/image";

import { BLACK, WHITE } from "@/src/styles/constants";
import { opensans, raleway } from "@/src/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: BLACK,

  [theme.breakpoints.only("md")]: {
    padding: "0 30px",
  },

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
    width: "300px",
    height: "100px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "100px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
    textAlign: "start",
    margin: " 30px 0 30px 30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const FastLinks = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",

  [theme.breakpoints.up("md")]: {
    width: "100%",
    margin: "30px 0",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "50px 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "40px 0",
  },
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  textAlign: "center",
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const ContactLabel = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  textAlign: "center",
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
    marginBottom: "10px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const ContactsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  marginTop: "20px",

  [theme.breakpoints.up("md")]: {
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-between",
    flexBasis: "calc(33.33% - 20px)",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const Contact = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {
    width: "31%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "47%",
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
