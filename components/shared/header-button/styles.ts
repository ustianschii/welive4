"use client";

import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { BOLD, GREEN, WHITE } from "@/src/styles/constants";
import { opensans } from "@/src/app/layout";

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  fontFamily: opensans.style.fontFamily,
  fontWeight: BOLD,
  border: "2px solid white",
  borderRadius: "10px",
  transform: "translateX(-50%)",
  lineHeight: "120%",
  height: "40px",
  position: "absolute",
  left: "50%",
  "&:hover": {
    color: GREEN,
  },

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
