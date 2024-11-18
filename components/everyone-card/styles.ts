"use client";

import { styled } from "@mui/material/styles";
import { Typography as MuiTypography, Box as MuiBox } from "@mui/material";

import { BLACK, SEMI_BOLD } from "@/styles/constants";
import { opensans } from "../../src/app/layout";

export const Container = styled(MuiBox)<{ background: string }>(
  ({ theme, background }) => ({
    display: "flex",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignItems: "center",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      height: "250px",
    },
    [theme.breakpoints.down("md")]: {
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  })
);

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: BLACK,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));
