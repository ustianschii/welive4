import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  TextField as MuiTextField,
  Button as MuiButton,
  Box as MuiBox,
  Typography as MuiTypography,
} from "@mui/material";

import {
  ARTICLE_BACKGROUND,
  BOLD,
  GREEN,
  SEPARATOR_BACKGROUND,
  WHITE,
} from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: SEPARATOR_BACKGROUND,
    height: "content-fit",
  },
}));

export const FieldsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: ARTICLE_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    height: "250px",
    marginBottom: "50px",
    borderRadius: "10px",
    padding: "20px",
  },
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
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

  [theme.breakpoints.down("sm")]: {},
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "5px",
    fontSize: "15px",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontWeight: BOLD,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    borderRadius: "10px",
    border: "2px solid",
    borderColor: GREEN,
    fontSize: "14px",
    marginBottom: "50px",
  },
}));
