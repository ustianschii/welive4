"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

import Link from "next/link";

import {
  Container,
  AppBar,
  CustomMenuIcon,
  DropDownMenu,
  Toolbar,
  Menu,
  MenuItemTypography,
  MenuItem,
  Logo,
  DesktopHeaderLinks,
  LinkLabel,
} from "./styles";
import { HeaderProps } from "./types";
import { MAIN_SERVICES_BACKGROUND, GREEN, WHITE } from "@/styles/constants";
import { ROUTES } from "../../../src/app/utils/routes-constants";

const pages = [
  { text: "HOME", href: ROUTES.HOME },
  { text: "SYSTEM DESIGN", href: ROUTES.SYSTEM_DESIGN },
  { text: "NETWORK SYSTEM", href: ROUTES.NETWORK_SYSTEM },
  { text: "ENTERTAINMENT SYSTEM", href: ROUTES.AUDIO_VISUAL_SYSTEMS },
  { text: "LOXONE AUTOMATION", href: ROUTES.LOXONE_AUTOMATION },
  { text: "ENERGY MANAGEMENT", href: ROUTES.ENERGY_MANAGEMENT },
  { text: "TV MOUNTING", href: ROUTES.OUTDOOR_TV },
  { text: "CONTACTS", href: ROUTES.CONSULTATION },
];

const desktopPages = [
  { text: "HOME", href: ROUTES.HOME },
  { text: "SERVICES", href: ROUTES.GET_SERVICES },
  { text: "SYSTEM DESIGN", href: ROUTES.SYSTEM_DESIGN },
  { text: "CONTACTS", href: ROUTES.CONSULTATION },
];

export const Header: React.FC<HeaderProps> = ({
  mobileheight,
  tabletheight,
  desktopheight,
  title,
  subtitle,
  button,
  background,
  tabletbackground,
  desktopbackground,
  backcolor,
  divider,
  dividerTop,
}) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      background={background}
      tabletbackground={tabletbackground}
      desktopbackground={desktopbackground}
      backcolor={backcolor}
    >
      <Container
        maxWidth="lg"
        disableGutters
        mobileheight={mobileheight}
        tabletheight={tabletheight}
        desktopheight={desktopheight}
      >
        <Toolbar
          disableGutters
          backcolor={scrolled ? MAIN_SERVICES_BACKGROUND : ""}
        >
          <Link href={ROUTES.HOME}>
            <Logo
              alt="logo"
              src="/header-mobile/logo.svg"
              width={0}
              height={0}
              priority
            />
          </Link>
          <DropDownMenu>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <CustomMenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <MenuItemTypography
                      color={index === 3 || index === 4 ? GREEN : WHITE}
                    >
                      {page.text}
                    </MenuItemTypography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </DropDownMenu>
          <DesktopHeaderLinks>
            {desktopPages.map((page, index) => (
              <Button key={index} onClick={handleCloseNavMenu} href={page.href}>
                <LinkLabel>{page.text}</LinkLabel>
              </Button>
            ))}
          </DesktopHeaderLinks>
        </Toolbar>
        {dividerTop}
        {title}
        {subtitle}
        <Link href={ROUTES.CONSULTATION}>{button}</Link>
      </Container>
      {divider}
      {Boolean(anchorElNav) && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(5px)",
            zIndex: 10,
          }}
          onClick={handleCloseNavMenu}
        />
      )}
    </AppBar>
  );
};
