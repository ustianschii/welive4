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
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
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

  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "10px 0",
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "10px 0",
    fontSize: "13px",
  },
}));
