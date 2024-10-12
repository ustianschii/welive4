import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@mui/material";
import { BLACK, BOLD, GRAY, WHITE } from "@/styles/constants";

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    backgroundColor: GRAY,
    height: "350px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,

  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
    fontWeight: BOLD,
    textAlign: "center",
    padding: "35px 0",
  },
}));

export const Box = styled(MuiTypography)(({ theme }) => ({
  backgroundColor: BLACK,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "50%",
  },
}));
