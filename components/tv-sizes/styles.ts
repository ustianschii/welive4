import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";

import { SEMI_BOLD, WHITE } from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url('outdoor-tv/sizes-bg.png')`,
  [theme.breakpoints.down("sm")]: {},
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    padding: "30px 0",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  textAlign: "center",
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",
    fontSize: "14px",
    padding: "0 20px",
  },
}));
