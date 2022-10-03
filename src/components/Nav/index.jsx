// import { h } from "preact";
import * as React from "react";
import Authentication from "@c/Authentication";
import Styles from "./styles.module.scss";
// @mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// local components
import KBVELogo from "../Branding/KBVELogo";

const pages = [
  { label: "Portfolio", link: "/projects" },
  { label: "Applications", link: "/application" },
  { label: "About", link: "/about" },
];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar
      //className={Styles.nav}
      position="fixed"
      //className={Styles.nav}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.72)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            maxHeight: "48px",
          }}
        >
          <Button
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            onClick={(e) => {
              e.preventDefault();

              handleCloseNavMenu();

              window.location.href = "/";
            }}
          >
            <KBVELogo />
          </Button>

          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="small"
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
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={(e) => {
                    e.preventDefault();

                    handleCloseNavMenu();

                    window.location.href = page.link;
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Button
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              flexGrow: 1,
            }}
            onClick={(e) => {
              e.preventDefault();

              handleCloseNavMenu();

              window.location.href = "/";
            }}
          >
            <KBVELogo />
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.label}
                onClick={(e) => {
                  e.preventDefault();

                  handleCloseNavMenu();

                  window.location.href = page.link;
                }}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{
                    height: "34px",
                    width: "34px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                key={"Sign Up"}
                onClick={(e) => {
                  e.preventDefault();

                  handleCloseUserMenu();

                  window.location.href = '/register';
                }}
              >
                <Typography textAlign="center">Sign Up</Typography>
              </MenuItem>
              {/* {["Sign In", , "Profile", "Settings", "Log Out"].map(
                (setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                )
              )} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;