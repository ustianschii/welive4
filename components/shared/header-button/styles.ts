"use client";
import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { BOLD, WHITE } from "../../../src/styles/constants";
import { opensans } from "@/app/layout";

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  border: "2px solid white",
  transform: "translateX(-50%)",
  lineHeight: "120%",
  fontSize: "16px",
  height: "50px",
  position: "absolute",
  left: "50%",

  [theme.breakpoints.up("md")]: {
    width: "300px",
    bottom: "100px",
  },
  [theme.breakpoints.down("md")]: {
    bottom: "50px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "250px",
  },
}));
