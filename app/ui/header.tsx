"use client";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

// Cypress tester som ska in i header
/* - `data-cy="cart-link"` knappen för att gå till kundvagnen/kassasidan.
- `data-cy="cart-items-count-badge"` siffran intill kundvagnsikonen som visar antalet tillagda produkter.
- `data-cy="admin-link"` den länk/knapp som går till admin.
*/

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

            {/* -------HÄR ÄR MENY FÖR DESKTOP------------ */}
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
                display: { xs: "block", md: "none" },
              }}
            >
              {/*------ Länk till admin sidan----------- */}
              <Link href="/admin/product" passHref>
                <Button color="inherit" data-cy="admin-link">
                  Admin
                </Button>
              </Link>
              {/* --------Tillfälliga länkar till andra sidor----------- */}
              <Link href="/checkout" passHref>
                <Button color="inherit">Posters</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Frames</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Home</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Favorite</Button>
              </Link>
              <Link href="/checkout" passHref>
                <Button color="inherit">Posters</Button>
              </Link>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WALL OF ART
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* ----------Länk till admin sida här---------- */}
            <Link href="/admin/product" passHref>
              <Button color="inherit" data-cy="admin-link">
                Admin
              </Button>
            </Link>
            {/* --------Tillfälliga länkar till andra sidor----------- */}
            <Link href="/checkout" passHref>
              <Button color="inherit">Posters</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Frames</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Favorite</Button>
            </Link>
            <Link href="/checkout" passHref>
              <Button color="inherit">Posters</Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* ----Här är icon för varukorgen----- */}
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}></IconButton>

            <Link href="/checkout" passHref>
              <ShoppingCartIcon />
            </Link>
            {/* -----MOBILE---HÄR BÖRJAR HAMBURGE MENY----- */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
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
              {/* -----Länk till admin sida mobil----- */}
              <Link href="/admin/product" passHref>
                <Button color="inherit" data-cy="admin-link">
                  Admin
                </Button>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

}
export default ResponsiveAppBar;

// function header() {
//   return (
//   );
// }
//     <div>
//       <h1>Här ska headern layouten vara</h1>
//       <header>
//         <Link href="/">
//           <h1>Wall Of Art</h1>
//         </Link>
//         <nav>
//           <Link href="/admin/product">admin</Link>
//           <Link href="/checkout">Checkout</Link>
//         </nav>
//       </header>

//     </div>

// export default header;
