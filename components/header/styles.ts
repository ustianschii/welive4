import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { BOLD, GREEN, SEMI_BOLD, WHITE } from "../../src/styles/constants";
import { opensans, raleway } from "@/app/layout";

export const AppBar = styled(MuiAppBar)(({}) => ({
  backgroundColor: "transparent",
  backgroundImage: `url('/mobile/hero-top.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "773px",
    position: "relative",
  },
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    height: "150px",
  },
}));

export const LogoBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "280px",
    height: "158px",
  },
}));

export const Logo = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "233px",
    height: "70px",
    backgroundImage: `url('/mobile/logo.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export const DropDownMenu = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "50px",
  },
}));

export const HeaderTextBox = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "220px",
    marginTop: "120px",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    height: "30px",
    marginBottom: "15px",
    justifyContent: "center",
    fontSize: "20px",
    fontFamily: raleway.style.fontFamily,
    fontWeight: SEMI_BOLD,
  },
}));

export const Highlighted = styled("span")(({}) => ({
  color: GREEN,
  marginLeft: "0.25em",
}));

export const Subtitle = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    textAlign: "center",
    height: "160px",
    fontSize: "40px",
    lineHeight: "110%",
    fontFamily: opensans.style.fontFamily,
    fontWeight: SEMI_BOLD,
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    color: WHITE,
    width: "317px",
    height: "66px",
    fontFamily: opensans,
    fontSize: "20px",
    lineHeight: "120%",
    fontWeight: BOLD,
    border: "1px solid white",
    padding: "15px",
    position: "absolute",
    bottom: "50px",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));
