import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
} from "@mui/material";
import {
  BLACK,
  GRAY,
  LIGHT_BLACK,
  REGULAR,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { raleway } from "@/app/layout";

export const Container = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: LIGHT_BLACK,
    minWidth: "50%",
    minHeight: "150px",
    borderRadius: "15px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  color: WHITE,
  fontFamily: raleway.style.fontFamily,
  fontWeight: REGULAR,
  lineHeight: "1.1",

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
