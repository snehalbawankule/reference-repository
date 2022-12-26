import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addArticle } from "../store/services";
import InstagramIcon from "@mui/icons-material/Instagram";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import MenuList from "@mui/material/MenuList";
import { PostArticle, TextWrap } from "./home.styled";
import { useAppDispatch } from "../hooks/hooks";
import Grid from "@mui/material/Grid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Divider } from "@mui/material";
import Homee from "./homee";

const Home = () => {
  const dispatch = useAppDispatch();
  //const article = useAppSelector((state) => state.articles.article);
  useEffect(() => {
    dispatch(addArticle());
  }, [dispatch]);
  /*const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };*/

  const navigate = useNavigate();
  const navAddPost = () => {
    navigate("/addpost");
  };
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={12} sm={12} md={3} lg={12}>
            <TextWrap>SkillupAfrica Blog</TextWrap>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={30}>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Article</MenuItem>
              <MenuItem>Contact Us</MenuItem>
            </MenuList>
          </Grid>

          <Grid item xs={12} sm={4} md={12} lg={20} style={{ marginLeft: 30 }}>
            <FacebookRoundedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={12}>
            <PostArticle onClick={navAddPost}>Post your Article</PostArticle>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider />
      <Grid
        container
        style={{
          paddingTop: 100,
          borderBlock: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Homee />
      </Grid>
    </Grid>
  );
};
export default Home;
