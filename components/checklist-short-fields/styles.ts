import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  TextField as MuiTextField,
  Button as MuiButton,
} from "@mui/material";

import { BOLD, GREEN, GREEN_DARK, LIGHT_GRAY, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: LIGHT_GRAY,
    height: "content-fit",
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
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  color: WHITE,
  fontWeight: BOLD,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: "10px",
    border: "2px solid",
    borderColor: GREEN_DARK,
    fontSize: "14px",
    marginBottom: "50px",
  },
}));
