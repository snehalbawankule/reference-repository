import { useNavigate, Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Menu, Toolbar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { PostArticle, TextWrap } from "./navbar.styled";
import Grid from "@mui/material/Grid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Navbar = () => {
  const pages = ["home", "article", "contact", "addpost"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const navigate = useNavigate();
  const navAddPost = () => {
    navigate("/addpost");
  };

  return (
    <Grid container>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Grid item xs={3} sm={3}>
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Box>

          <Grid md={12} lg={12}>
            <Box
              sx={{
                flexGrow: 1,
                display: { my: 2, xs: "none", md: "flex" },
              }}
            >
              <Grid md={4} lg={4}>
                <TextWrap>SkillupAfrica Blog</TextWrap>
              </Grid>
              <MenuItem>
                <Link style={{ color: "white" }} to="/home">
                  Home
                </Link>
              </MenuItem>

              <MenuItem>
                <Link style={{ color: "white" }} to="/article">
                  Article
                </Link>
              </MenuItem>
              <MenuItem>
                <Link style={{ color: "white" }} to="/contact">
                  Contact Us
                </Link>
              </MenuItem>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sm={4}
            md={12}
            lg={4}
            style={{ marginLeft: 30 }}
            display="flex"
            justifyContent="space-evenly"
          >
            <FacebookRoundedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Grid>
          <Grid item xs={4} sm={6} md={4} lg={4}>
            <PostArticle onClick={navAddPost}>Post your Article</PostArticle>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Navbar;
