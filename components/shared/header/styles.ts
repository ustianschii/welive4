import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface AppBarProps {
  background?: string;
}

export const AppBar = styled(MuiAppBar)<AppBarProps>(({ background }) => ({
  backgroundColor: "transparent",
  backgroundImage: background,
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
    backgroundImage: `url('/header-mobile/logo.png')`,
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
