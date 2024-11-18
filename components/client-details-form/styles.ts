"use client";

import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  TextField as MuiTextField,
} from "@mui/material";
import { GREEN, WHITE, BLACK } from "@/styles/constants";
import { opensans } from "../../src/app/layout";

export const FormContainer = styled(MuiBox)(({ theme }) => ({
  backgroundColor: BLACK,
  border: "2px solid",
  borderColor: GREEN,
  margin: "20px 0 20px 0",
  borderRadius: "10px",
  [theme.breakpoints.up("md")]: {
    padding: "30px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 15px",
  },
}));

export const Label = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
}));

export const FieldContainer = styled(MuiBox)(() => ({
  marginBottom: "10px",
}));

export const TextField = styled(MuiTextField)(() => ({
  "& .MuiInputBase-input": {
    color: WHITE,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: WHITE,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: GREEN,
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: GREEN,
  },

  ".MuiSelect-icon": {
    color: GREEN,
  },
}));
