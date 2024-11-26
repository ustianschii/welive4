"use client";

import { styled } from "@mui/material/styles";
import { Button as MuiButton, Box as MuiBox } from "@mui/material";

import { WHITE } from "@/styles/constants";
import { opensans } from "../../../src/app/layout";

export const ImageBox = styled(MuiBox)(({ theme }) => ({
  width: "100%",
  position: "relative",
  [theme.breakpoints.up("lg")]: {
    minHeight: "300px",
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: "280px",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "230px",
    borderRadius: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "180px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  border: "2px solid white",
  fontFamily: opensans.style.fontFamily,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  minWidth: 0,
  width: "100%",

  [theme.breakpoints.up("md")]: {
    padding: "5px 10px",
    fontSize: "15px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "5px 0",
    fontSize: "14px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));
