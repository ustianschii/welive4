import Image from "next/image";
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

import { opensans } from "@/src/app/layout";
import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";

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
interface ToolbarProps {
  backcolor: boolean;
}

export const AppBar = styled(MuiAppBar)<AppBarProps>(
  ({ theme, background, backcolor, tabletbackground, desktopbackground }) => ({
    [theme.breakpoints.up("sm")]: {
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
      height: desktopheight ?? "600px",
      position: "relative",
      marginTop: "80px",
    },
    [theme.breakpoints.down("md")]: {
      height: tabletheight ?? "600px",
      position: "relative",
      marginTop: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      height: mobileheight ?? "600px",
      position: "relative",
      marginTop: "80px",
    },
  })
);

export const Toolbar = styled(MuiToolbar)<ToolbarProps>(
  ({ theme, backcolor }) => ({
    display: "flex",
    height: "80px",
    justifyContent: "space-between",
    zIndex: "3",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: backcolor ? "rgba(255, 255, 255, 0.1)" : "transparent",
    backdropFilter: backcolor ? "blur(10px)" : "none",
    WebkitBackdropFilter: backcolor ? "blur(10px)" : "none",
    transition:
      "background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
    boxShadow: backcolor ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
    borderBottom: backcolor ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
    [theme.breakpoints.up("md")]: {
      padding: "0 2%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 10%",
    },
  })
);

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
    width: "220px",
    height: "150px",
    marginLeft: "5%",
  },
}));

export const DesktopHeaderLinks = styled(MuiBox)(({ theme }) => ({
  width: "100%",
  justifyContent: "end",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    gap: "20px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    gap: "40px",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
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
      backgroundImage: `url('dropdown-menu/dropdown-bg.png')`,
      padding: "5%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiPaper-root": {
      padding: "10% 0 10% 10%",
    },
  },
}));

export const MenuItem = styled(MuiMenuItem)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
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

export const ShadowBox = styled(MuiBox)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  zIndex: 10,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
