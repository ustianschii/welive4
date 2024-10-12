import { styled } from "@mui/material/styles";
import { Container as MuiContainer, Box as MuiBox } from "@mui/material";

import Link from "next/link";

import { DARK_GRAY, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: DARK_GRAY,
    height: "content-fit",
    padding: "35px 10px",
  },
}));

export const LogoContainer = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "fit-content",
    marginBottom: "25px",
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  "&:visited": {
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  height: "content-fit",
  display: "grid",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
  },
}));
