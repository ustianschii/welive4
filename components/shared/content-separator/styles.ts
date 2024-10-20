import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";

import { SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const Container = styled(MuiContainer)<{
  bg?: string;
  containerpadding?: string;
}>(({ theme, bg, containerpadding }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    padding: containerpadding,
  },
}));

export const Title = styled(MuiTypography)<{
  titlepadding?: string;
}>(({ theme, titlepadding }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: titlepadding,
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  lineHeight: "1.4",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    margin: "30px 0 40px 0",
    maxWidth: "75%",
  },
}));
