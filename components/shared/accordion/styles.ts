import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Accordion as MuiAccordion,
} from "@mui/material";

import { SEPARATOR_BACKGROUND, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,

  [theme.breakpoints.down("sm")]: {
    padding: "30px 0",
  },
}));

export const Accordion = styled(MuiAccordion)(({ theme }) => ({
  backgroundColor: SEPARATOR_BACKGROUND,
  "&:before": {
    display: "none",
  },
  margin: "0 !important",
  boxShadow: "none",

  [theme.breakpoints.down("sm")]: {},
}));

export const Question = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    paddingRight: "10px",
  },
}));

export const Answer = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  [theme.breakpoints.down("sm")]: {},
}));
