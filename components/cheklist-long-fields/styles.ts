"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  TextField as MuiTextField,
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
  Button as MuiButton,
} from "@mui/material";
import {
  LIGHT_GRAY,
  WHITE,
  MAIN_SERVICES_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  SEPARATOR_BACKGROUND,
} from "@/styles/constants";
import { opensans, raleway } from "../../src/app/layout";

export const Container = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
}));

export const FieldsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: MAIN_SERVICES_BACKGROUND,

  borderRadius: "10px",
  marginBottom: "30px",

  [theme.breakpoints.up("md")]: {
    width: "40%",
    padding: "40px",
    marginTop: "40px",
  },
  [theme.breakpoints.down("md")]: {
    width: "85%",
    padding: "30px",
    marginTop: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    padding: "20px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  fontSize: "16px",

  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Card = styled(MuiBox)(({ theme }) => ({
  width: "95%",
  marginBottom: "50px",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  color: WHITE,
  paddingLeft: "25px",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const Checkbox = styled(MuiCheckbox)(({ theme }) => ({
  "&.MuiCheckbox-root": {
    color: GREEN,
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const TextField = styled(MuiTextField)(() => ({
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
    borderWidth: "1px",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "gray",
    opacity: 1,
  },
}));

export const FormControlLabel = styled(MuiFormControlLabel)(() => ({
  "& .MuiFormControlLabel-label": {
    color: WHITE,
    fontFamily: raleway.style.fontFamily,
    fontSize: "15px",
    marginTop: "5px",
  },
}));

export const ShareBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
}));

export const UploadButton = styled(MuiButton)(({ theme }) => ({
  display: "flex",
  backgroundColor: LIGHT_GRAY,
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  textTransform: "none",
  borderRadius: "10px",
  fontSize: "16px",
  marginTop: "10px",

  [theme.breakpoints.up("md")]: {
    width: "50%",
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "14px",
  },
}));

export const SubmitButton = styled(MuiButton)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  color: WHITE,
  textTransform: "none",
  border: "2px solid white",
  marginTop: "20px",
  borderRadius: "10px",
  fontSize: "16px",

  [theme.breakpoints.up("md")]: {
    width: "50%",
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
    fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "14px",
  },
}));
