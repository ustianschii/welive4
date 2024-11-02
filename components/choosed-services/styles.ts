import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  ListItem as MuiListItem,
  Typography as MuiTypography,
  TextField as MuiTextField,
  Button as MuiButton,
} from "@mui/material";

import {
  WHITE,
  GET_SERVICES_BACKGROUND,
  BLACK,
  GREEN_DARK,
  SEMI_BOLD,
} from "@/styles/constants";
import { opensans } from "@/app/layout";

export const ServicesBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: GET_SERVICES_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: "0 30px 20px 30px",
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
      border: "2px solid",
      borderColor: GREEN_DARK,
      borderRadius: "10px",
    },
  },
  "& .MuiInputBase-input": {
    color: WHITE,
  },

  ".MuiSelect-icon": {
    color: BLACK,
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  border: "2px solid",
  borderColor: GREEN_DARK,
  borderRadius: "10px",
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  fontSize: "18px",
  padding: "5px 30px",
  [theme.breakpoints.down("sm")]: {},
}));
