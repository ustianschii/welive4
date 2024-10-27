"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Button } from "@mui/material";

import {
  Container,
  AppBar,
  CustomMenuIcon,
  DropDownMenu,
  Toolbar,
  Menu,
} from "./styles";
import { HeaderProps } from "./types";

import Image from "next/image";
import { GREEN, WHITE } from "@/styles/constants";
import { opensans } from "@/app/layout";

const pages = [
  "HOME",
  "SYSTEM DESIGN",
  "NETWORK SYSTEM",
  "ENTERTAINMENT SYSTEM",
  "LOXONE AUTOMATION",
  "ENERGY MANAGEMENT",
  "TV MOUNTING",
  "BLOG",
];

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  button,
  background,
  backcolor,
  divider,
  dividerTop,
  height,
}) => {
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
    <AppBar position="static" background={background} backcolor={backcolor}>
      <Container maxWidth="xl" disableGutters height={height}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Image
            alt="logo"
            src="/header-mobile/logo.svg"
            width={270}
            height={150}
            style={{ marginLeft: "5%" }}
          />
          <DropDownMenu>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    color={index === 3 || index === 4 ? GREEN : WHITE}
                    fontFamily={opensans.style.fontFamily}
                    fontSize="24px"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </DropDownMenu>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
        {dividerTop}
        {title}
        {subtitle}
        {button}
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
