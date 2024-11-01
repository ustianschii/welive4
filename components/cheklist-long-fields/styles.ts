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
  LIGHT_GRAY,
  WHITE,
  ARTICLE_BACKGROUND,
  GREEN,
  SEMI_BOLD,
  SEPARATOR_BACKGROUND,
} from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
  [theme.breakpoints.down("sm")]: {},
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    width: "70%",
    marginBottom: "50px",
  },
}));

export const FieldsBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: ARTICLE_BACKGROUND,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    borderRadius: "10px",
    width: "95%",
    padding: "40px 20px",
    marginBottom: "30px",
  },
}));

export const Card = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    marginBottom: "50px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  color: WHITE,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "25px",
    fontSize: "17px",
    marginBottom: "10px",
  },
}));

export const Checkbox = styled(MuiCheckbox)(({ theme }) => ({
  "&.MuiCheckbox-root": {
    color: GREEN,
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: WHITE,
    borderRadius: "10px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
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

  [theme.breakpoints.down("sm")]: {},
}));

export const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    color: WHITE,
    fontFamily: raleway.style.fontFamily,
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "5px",
  },
}));

export const ShareBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
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

  [theme.breakpoints.down("sm")]: {
    borderRadius: "10px",
    fontSize: "16px",
    marginBottom: "20px",
  },
}));

export const SubmitButton = styled(MuiButton)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  color: WHITE,
  textTransform: "none",
  border: "2px solid white",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: "10px",
    fontSize: "16px",
  },
}));
