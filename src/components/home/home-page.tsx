import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Menu, Toolbar, Button, Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { PostArticle, TextWrap } from "./home.styled";
import Grid from "@mui/material/Grid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Divider } from "@mui/material";
import Homee from "./homee";

const Home = () => {
  /*const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };*/
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
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
          <Grid item xs={12} sm={12} md={3} lg={12}>
            <TextWrap>SkillupAfrica Blog</TextWrap>
          </Grid>
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
              sx={{
                display: { xs: "block" },
              }}
            >
              <MenuItem>
                <Link href="/article">Article</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about">Contact Us</Link>
              </MenuItem>
            </Menu>
          </Box>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                flexGrow: 1,
                display: { my: 2, xs: "none", md: "flex" },
              }}
            >
              <MenuItem>
                <Link style={{ color: "white" }}>Home</Link>
              </MenuItem>

              <MenuItem>
                <Link style={{ color: "white" }} href="/article">
                  Article
                </Link>
              </MenuItem>
              <MenuItem>
                <Link style={{ color: "white" }} href="/about">
                  Contact Us
                </Link>
              </MenuItem>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12} style={{ marginLeft: 30 }}>
            <FacebookRoundedIcon />
            <TwitterIcon style={{ marginLeft: 20 }} />
            <InstagramIcon style={{ marginLeft: 20 }} />
            <YouTubeIcon style={{ marginLeft: 20 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={12}>
            <PostArticle onClick={navAddPost}>Post your Article</PostArticle>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider style={{ marginBottom: 100 }} />
      <Grid
        item
        style={{
          marginTop: 50,
          margin: 20,
        }}
      >
        <Homee />
      </Grid>
    </Grid>
  );
};
export default Home;
