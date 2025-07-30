"use client";

import React, { useState, useEffect, ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
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
  ShadowBox,
} from "./styles";
import { HEADER_TOOLBAR, GREEN, WHITE } from "@/src/styles/constants";
import { ROUTES } from "@/src/app/utils/routes-constants";
import { HeaderDesktopButton } from "@/components/header-desktop-button";
import { desktopPages, pages } from "./data";
import { HeaderSubtitle } from "../header-subtitle";
import { GreenDivider } from "../green-divider";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";

interface HeaderLayoutProps {
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  isHeaderTop?: boolean;
}

interface HeaderContentProps {
  titleStart?: string;
  titleEnd?: string;
  titleHighStart?: string;
  titleHighEnd?: string;
  title?: ReactNode;
  subtitle?: string[];
  button?: ReactNode;
  divider?: boolean;
  dividerTop?: ReactNode;
}

interface HeaderBackgroundProps {
  background?: string;
  tabletBackground?: string;
  desktopBackground?: string;
  backColor?: string;
}

interface HeaderProps {
  layout?: HeaderLayoutProps;
  content?: HeaderContentProps;
  background?: HeaderBackgroundProps;
}

export const Header = ({ layout, content, background }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="static"
      background={background?.background}
      tabletbackground={background?.tabletBackground}
      desktopbackground={background?.desktopBackground}
      backcolor={background?.backColor}
    >
      <Container
        maxWidth="lg"
        disableGutters
        mobileheight={layout?.mobileHeight}
        tabletheight={layout?.tabletHeight}
        desktopheight={layout?.desktopHeight}
      >
        <Toolbar disableGutters backcolor={scrolled ? HEADER_TOOLBAR : ""}>
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
                  key={page.text}
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
            {desktopPages.map((page) => (
              <HeaderDesktopButton
                key={page.text}
                href={page.href}
                label={page.text}
              />
            ))}
          </DesktopHeaderLinks>
        </Toolbar>
        {content?.dividerTop}
        {content?.title} {/* to be deleted after refactoring */}
        <HeaderTextBox isHeaderTop={layout?.isHeaderTop}>
          <Subtitle component="h1">
            {content?.titleStart}
            <Highlighted mLeft="5px">{content?.titleHighEnd}</Highlighted>
            <Highlighted mRight="5px">{content?.titleHighStart}</Highlighted>
            {content?.titleEnd}
          </Subtitle>
        </HeaderTextBox>
        <HeaderSubtitle subtitles={content?.subtitle} />
        {content?.button}
      </Container>
      {content?.divider && <GreenDivider />}
      {Boolean(anchorElNav) && <ShadowBox onClick={handleCloseNavMenu} />}
    </AppBar>
  );
};
