import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import { GRAY, SEMI_BOLD, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundColor: GRAY,
    height: "content-fit",
    textAlign: "center",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontWeight: SEMI_BOLD,
  lineHeight: "1.1",

  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    padding: "35px 0 10px 0",
  },
}));

export const CardContainer = styled(MuiBox)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    paddingBottom: "35px",
  },
}));
