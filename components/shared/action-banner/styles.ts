import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

import { SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(() => ({
  backgroundImage: `url(${"/action-banner/action-banner-bg.png"})`,
  backgroundPosition: "center",
  padding: "30px 10px",
  minHeight: "280px",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",
  color: WHITE,
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const Button = styled(MuiButton)(() => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  border: "2px solid white",
  width: "100%",
  fontSize: "15px",
  padding: "5px 15px",
}));
