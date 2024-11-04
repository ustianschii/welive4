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
  width: "300px",
  height: "60px",

  [theme.breakpoints.down("md")]: {
    position: "absolute",
    bottom: "100px",
    left: "50%",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    position: "absolute",
    bottom: "50px",
    left: "50%",
  },
}));
