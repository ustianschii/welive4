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
  SUBMIT_FORM_BACKGROUND,
  BOLD,
  MAIN_SERVICES_BACKGROUND,
} from "@/styles/constants";
import { raleway, opensans } from "../../src/app/layout";

export const Wrapper = styled(MuiBox)(() => ({
  backgroundColor: MAIN_SERVICES_BACKGROUND,
}));

export const FormContainer = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: SUBMIT_FORM_BACKGROUND,
  border: "2px solid",
  borderColor: GREEN,
  borderRadius: "10px",
  [theme.breakpoints.only("md")]: {
    width: "80%",
    padding: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    padding: "30px",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    padding: "30px",
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
  marginTop: "10px",
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const Label = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  marginTop: "5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const FieldContainer = styled(MuiBox)(() => ({
  marginBottom: "15px",
}));

export const Pair = styled(MuiBox)(() => ({
  display: "flex",
  marginTop: "30px",
  justifyContent: "flex-start",
  gap: "20px",
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: WHITE,
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: GREEN,
  },

  "& .MuiInput-underline:before": {
    borderBottomColor: WHITE,
    transition: "border-bottom-color 0.3s ease",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: GREEN,
  },
  ".MuiSelect-icon": {
    color: GREEN,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "100%",
  },

  [theme.breakpoints.down("md")]: {
    width: "400px",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
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
  fontFamily: opensans.style.fontFamily,
  fontSize: "16px",
  lineHeight: "120%",
  fontWeight: BOLD,
  border: "2px solid white",
  height: "40px",
  margin: "20px auto 0 auto",
  display: "block",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
