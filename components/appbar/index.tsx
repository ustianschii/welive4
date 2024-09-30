"use client";
import * as React from "react";
import {
  AppBar,
  SearchButtonIcon,
  SearchField,
  PagesButton,
  MenuContainer,
  MobileTitle,
  PagesContainer,
  SearchBox,
} from "./styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { ROUTES } from "../../utils/constants";

const pages = ["How It Works", "Pricing", "About Us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [scrolled, setScrolled] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
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

  return (
    <AppBar position="fixed" scrolled={scrolled}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters>
          <MenuContainer>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
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
          </MenuContainer>
          <MobileTitle variant="h5" noWrap component="a">
            WeLive4
          </MobileTitle>
          <PagesContainer>
            {pages.map((page) => (
              <PagesButton
                key={page}
                onClick={handleCloseNavMenu}
                scrolled={scrolled}
              >
                {page}
              </PagesButton>
            ))}
          </PagesContainer>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTES.HOME}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: "25px",
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            WeLive4
          </Typography>
          <SearchBox>
            <SearchField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
            ></SearchField>
            <IconButton size="small">
              <SearchButtonIcon scrolled={scrolled} />
            </IconButton>
          </SearchBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
