"use client";

import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import Image from "next/image";

import { WHITE } from "@/styles/constants";
import { opensans } from "../../../src/app/layout";

export const Background = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  [theme.breakpoints.down("md")]: {
    borderRadius: "10px",
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
    padding: "10px 10px",
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
