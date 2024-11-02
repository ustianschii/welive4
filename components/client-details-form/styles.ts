import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Box as MuiBox,
  TextField as MuiTextField,
} from "@mui/material";
import { GREEN, WHITE, TEXT_US_BACKGROUND } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const FormContainer = styled(MuiBox)(({ theme }) => ({
  backgroundColor: TEXT_US_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  margin: "20px 0 20px 0",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 15px",
    borderRadius: "10px",
  },
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {},
}));

export const FieldContainer = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginBottom: "15px",
  },
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: WHITE,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: WHITE,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: GREEN,
  },
  ".MuiSelect-icon": {
    color: GREEN,
  },
  [theme.breakpoints.down("sm")]: {},
}));
