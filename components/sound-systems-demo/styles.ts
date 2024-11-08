import { styled } from "@mui/material/styles";
import {
  Typography as MuiTypography,
  Container as MuiContainer,
} from "@mui/material";
import { SEPARATOR_BACKGROUND, SEMI_BOLD, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: SEPARATOR_BACKGROUND,
  padding: "35px 0",
  [theme.breakpoints.down("md")]: {
    minHeight: "750px",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "900px",
  },
}));

export const Title = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  fontSize: "35px",
  marginBottom: "20px",
}));
