import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Menu as MuiMenu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SEPARATOR_BACKGROUND } from "@/styles/constants";

interface AppBarProps {
  background?: string;
  backcolor?: string;
}
interface ContainerProps {
  height?: string;
}

export const AppBar = styled(MuiAppBar)<AppBarProps>(
  ({ background, backcolor }) => ({
    backgroundColor: backcolor ? "transparent" : backcolor ?? "none",
    backgroundImage: background ?? "none",
    backgroundRepeat: background ? "no-repeat" : "",
    backgroundSize: background ? "cover" : "",
    backgroundPosition: background ? "center" : "",
  })
);

export const Container = styled(MuiContainer)<ContainerProps>(
  ({ theme, height }) => ({
    [theme.breakpoints.down("sm")]: {
      height: height,
      position: "relative",
    },
  })
);

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    height: "150px",
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

export const Menu = styled(MuiMenu)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    "& .MuiPaper-root": {
      minWidth: "100%",
      borderRadius: "10px",
      height: "500px",
      backgroundColor: SEPARATOR_BACKGROUND,
      backgroundImage: `url('dropdown-menu/dropdown-bg.svg')`,
      padding: "10% 0 10% 10%",
    },
  },
}));

export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "50px",
  },
}));
