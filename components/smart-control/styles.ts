import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import { DARK_GRAY, SEMI_BOLD, WHITE, REGULAR } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundColor: DARK_GRAY,
    height: "content-fit",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: REGULAR,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "21px",
    padding: "30px 0 20px 0",
  },
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",

  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "30px 10px",
  },
}));
