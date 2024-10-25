import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  TextField as MuiTextField,
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
  Button as MuiButton,
} from "@mui/material";
import {
  GREEN,
  WHITE,
  MAIN_BACKGROUND_GRAY,
  SUBMIT_FORM_BACKGROUND,
  BOLD,
} from "@/styles/constants";
import { raleway, opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: MAIN_BACKGROUND_GRAY,
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
  },
}));

export const FormContainer = styled(MuiBox)(({ theme }) => ({
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  [theme.breakpoints.down("sm")]: {
    padding: "50px 15px",
    borderRadius: "10px",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginBottom: "10px",
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

export const Pair = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {},
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

export const Checkbox = styled(MuiCheckbox)(({ theme }) => ({
  color: GREEN,
  "&.Mui-checked": {
    color: GREEN,
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,

  [theme.breakpoints.down("sm")]: {},
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    height: "60px",
    fontFamily: opensans.style.fontFamily,
    fontSize: "18px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "2px solid white",
    marginTop: "20px",
  },
}));
