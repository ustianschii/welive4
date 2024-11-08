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
  backgroundColor: SEPARATOR_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {},
}));

export const FieldsBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: ARTICLE_BACKGROUND,
  borderRadius: "10px",

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

  [theme.breakpoints.down("md")]: {
    width: "50%",
    fontSize: "17px",
    margin: "50px 0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "14px",
    margin: "50px 0",
  },
}));
