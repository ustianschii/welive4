"use client";

import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  ListItem as MuiListItem,
  Box as MuiBox,
} from "@mui/material";

import { WHITE, BLACK } from "@/styles/constants";
import { opensans } from "../../src/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: BLACK,
}));

export const ServicesBox = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: BLACK,

  [theme.breakpoints.up("md")]: {
    padding: "0 30px 20px 30px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 70px 20px 70px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 30px 20px 30px",
  },
}));

export const ListItem = styled(MuiListItem)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  paddingBottom: "2px",
  [theme.breakpoints.up("md")]: {
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
  },
}));
