"use client";

import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import Image from "next/image";

import { WHITE, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Background = styled(Image)(({ theme }) => ({
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

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "10px 0",
  },
}));
