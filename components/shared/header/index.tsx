"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  Container,
  AppBar,
  CustomMenuIcon,
  DropDownMenu,
  Toolbar,
} from "./styles";
import { HeaderProps } from "./types";
import { Button } from "@mui/material";
import Image from "next/image";

const pages = [
  "HOME",
  "SYSTEM DESIGN",
  "NETWORK SYSTEM",
  "ENTERTAINMENT SYSTEM",
  "LOXONE AUTOMATION",
  "ENERGY MANAGEMENT",
  "TV MOUNTING",
  "BLOG",
  "BOOK NOW",
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
            width={240}
            height={120}
            style={{ marginLeft: "10px" }}
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
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
    </AppBar>
  );
};
