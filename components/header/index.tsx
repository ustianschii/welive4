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
  Logo,
  AppBar,
  LogoBox,
  CustomMenuIcon,
  DropDownMenu,
  Toolbar,
  HeaderTextBox,
  Title,
  Highlighted,
  Subtitle,
  Button,
} from "./styles";

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

export const Header = () => {
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
    <AppBar position="static">
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
          <LogoBox>
            <Logo />
          </LogoBox>
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
        <HeaderTextBox>
          <Title>
            WELCOME TO<Highlighted>WE LIVE 4</Highlighted>
          </Title>
          <Subtitle>
            YOUR HOME IS <br /> YOUR <br />
            <Highlighted>SMART FUTURE</Highlighted>
          </Subtitle>
        </HeaderTextBox>
        <Button variant="outlined">GET A FREE QUOTE!</Button>
      </Container>
    </AppBar>
  );
};
