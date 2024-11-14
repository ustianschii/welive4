"use client";

import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import Image from "next/image";

import { WHITE, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Background = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  border: "2px solid white",
  fontWeight: SEMI_BOLD,
  fontFamily: opensans.style.fontFamily,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  minWidth: 0,
  width: "100%",

  [theme.breakpoints.up("md")]: {
    padding: "10px 10px",
    fontSize: "16px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "5px 0",
    fontSize: "14px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "5px 0",
    fontSize: "12px",
  },
}));
