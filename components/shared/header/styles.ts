import { styled } from "@mui/material/styles";
import {
  Container as MuiContainer,
  Box as MuiBox,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Menu as MuiMenu,
  Typography as MuiTypography,
  MenuItem as MuiMenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";

import { SEMI_BOLD, SEPARATOR_BACKGROUND, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

interface AppBarProps {
  background?: string;
  tabletbackground?: string;
  desktopbackground?: string;
  backcolor?: string;
}
interface ContainerProps {
  mobileheight?: string;
  tabletheight?: string;
  desktopheight?: string;
}

export const AppBar = styled(MuiAppBar)<AppBarProps>(
  ({ theme, background, backcolor, tabletbackground, desktopbackground }) => ({
    [theme.breakpoints.up("md")]: {
      backgroundColor:
        desktopbackground || backcolor ? backcolor ?? "gray" : "gray",
      backgroundImage: desktopbackground ?? "none",
      backgroundRepeat: desktopbackground ? "no-repeat" : "",
      backgroundSize: desktopbackground ? "cover" : "",
      backgroundPosition: "center",
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor:
        tabletbackground || backcolor ? backcolor ?? "gray" : "gray",
      backgroundImage: tabletbackground ?? "none",
      backgroundRepeat: tabletbackground ? "no-repeat" : "",
      backgroundSize: tabletbackground ? "cover" : "",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: background || backcolor ? backcolor ?? "gray" : "gray",
      backgroundImage: background ?? "none",
      backgroundRepeat: background ? "no-repeat" : "",
      backgroundSize: background ? "cover" : "",
    },
  })
);

export const Container = styled(MuiContainer)<ContainerProps>(
  ({ theme, mobileheight, tabletheight, desktopheight }) => ({
    [theme.breakpoints.up("md")]: {
      height: desktopheight ?? "1000px",
      position: "relative",
    },
    [theme.breakpoints.down("md")]: {
      height: tabletheight ?? "700px",
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      height: mobileheight ?? "700px",
      position: "relative",
    },
  })
);

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.up("md")]: {
    padding: "0 20px",
  },
  [theme.breakpoints.down("md")]: {
    height: "100px",
  },
}));

export const Logo = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "350px",
    height: "100px",
  },
  [theme.breakpoints.down("md")]: {
    width: "350px",
    height: "150px",
    marginLeft: "10%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    height: "150px",
    marginLeft: "5%",
  },
}));

export const DesktopHeaderLinks = styled(MuiBox)(({ theme }) => ({
  width: "100%",
  justifyContent: "end",
  gap: "40px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const LinkLabel = styled(MuiTypography)(() => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  fontSize: "18px",
  whiteSpace: "nowrap",
}));

export const DropDownMenu = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const Menu = styled(MuiMenu)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    "& .MuiPaper-root": {
      backgroundColor: SEPARATOR_BACKGROUND,
      borderRadius: "10px",
      height: "450px",
      backgroundImage: `url('dropdown-menu/dropdown-bg.svg')`,
      padding: "20px 0 0 10px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiPaper-root": {
      height: "500px",
      padding: "10% 0 10% 10%",
    },
  },
}));

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
  },
}));

export const MenuItemTypography = styled(MuiTypography)(({ theme }) => ({
  fontFamily: opensans.style.fontFamily,

  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "70px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "50px",
  },
}));
