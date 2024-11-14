"use client";

import { styled } from "@mui/material/styles";
import {
  TextField as MuiTextField,
  Button as MuiButton,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

import {
  MAIN_SERVICES_BACKGROUND,
  BOLD,
  GREEN,
  SEPARATOR_BACKGROUND,
  WHITE,
} from "@/styles/constants";
import { opensans } from "../../src/app/layout";

export const Container = styled(MuiBox)(() => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const FieldsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: MAIN_SERVICES_BACKGROUND,
  justifyContent: "space-between",
  borderRadius: "10px",

  [theme.breakpoints.up("md")]: {
    width: "40%",
    height: "300px",
    padding: "30px",
  },

  [theme.breakpoints.down("md")]: {
    width: "85%",
    height: "300px",
    padding: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "250px",
    padding: "20px",
  },
}));

export const TextField = styled(MuiTextField)(({}) => ({
  "& .MuiOutlinedInput-root": {
    color: WHITE,
    borderRadius: "10px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: GREEN,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: GREEN,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: GREEN,
    borderWidth: "2px",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "gray",
    opacity: 1,
  },
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.down("md")]: {
    marginBottom: "10px",
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "5px",
    fontSize: "15px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontWeight: BOLD,
  fontFamily: opensans.style.fontFamily,
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",

  [theme.breakpoints.up("md")]: {
    width: "30%",
    fontSize: "17px",
    margin: "50px",
  },

  [theme.breakpoints.down("md")]: {
    width: "50%",
    fontSize: "17px",
    margin: "50px 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "14px",
  },
}));
