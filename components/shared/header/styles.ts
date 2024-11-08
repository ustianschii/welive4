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

import { SEPARATOR_BACKGROUND } from "@/styles/constants";
import { opensans } from "@/app/layout";

interface AppBarProps {
  background?: string;
  tabletbackground?: string;
  backcolor?: string;
}
interface ContainerProps {
  mobileheight?: string;
  tabletheight?: string;
}

export const AppBar = styled(MuiAppBar)<AppBarProps>(
  ({ theme, background, backcolor, tabletbackground }) => ({
    [theme.breakpoints.down("md")]: {
      backgroundColor:
        tabletbackground || backcolor ? backcolor ?? "gray" : "gray",
      backgroundImage: tabletbackground ?? "none",
      backgroundRepeat: tabletbackground ? "no-repeat" : "",
      backgroundSize: tabletbackground ? "cover" : "",
      backgroundPosition: tabletbackground ? "center" : "",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: background || backcolor ? backcolor ?? "gray" : "gray",
      backgroundImage: background ?? "none",
      backgroundRepeat: background ? "no-repeat" : "",
      backgroundSize: background ? "cover" : "",
      backgroundPosition: background ? "center" : "",
    },
  })
);

export const Container = styled(MuiContainer)<ContainerProps>(
  ({ theme, mobileheight, tabletheight }) => ({
    [theme.breakpoints.down("md")]: {
      height: tabletheight || "700px",
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      height: mobileheight || "700px",
      position: "relative",
    },
  })
);

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    height: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "150px",
  },
}));

export const Logo = styled(Image)(({ theme }) => ({
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

export const DropDownMenu = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

export const Menu = styled(MuiMenu)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",

    "& .MuiPaper-root": {
      minWidth: "50%",
      borderRadius: "10px",
      height: "450px",
      backgroundColor: SEPARATOR_BACKGROUND,
      backgroundImage: `url('dropdown-menu/dropdown-bg.svg')`,
      padding: "20px 0 0 10px",
    },
  },
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

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
  },
  [theme.breakpoints.down("md")]: {},
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
