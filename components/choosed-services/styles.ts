import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  ListItem as MuiListItem,
  Typography as MuiTypography,
  TextField as MuiTextField,
  Button as MuiButton,
  MenuItem as MuiMenuItem,
  Container as MuiContainer,
} from "@mui/material";

import { WHITE, BLACK, SEMI_BOLD, GREEN } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  backgroundColor: BLACK,
  [theme.breakpoints.down("sm")]: {
    padding: "0 30px 20px 30px",
  },
}));

export const ServicesBox = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: BLACK,
  [theme.breakpoints.up("md")]: {
    padding: "0 30px 20px 30px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 30px 20px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

export const ListItem = styled(MuiListItem)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  paddingBottom: "2px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
  },
}));

export const FieldContainer = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginBottom: "15px",
  },
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {},
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  marginTop: "10px",
  "& .MuiInputBase-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: GREEN,
      borderRadius: "10px",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: GREEN,
    },
  },
  "& .MuiInputBase-input": {
    color: WHITE,
  },

  ".MuiSelect-icon": {
    color: WHITE,
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  fontSize: "18px",
  padding: "5px 30px",
  [theme.breakpoints.down("sm")]: {},
}));
