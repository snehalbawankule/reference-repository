import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
//import Home1 from "./home";
//import AddPost from "../add-post/add-post";
import { PostArticle, TextWrap } from "./home.styled";
import Grid from "@mui/material/Grid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Divider } from "@mui/material";

const Home = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const navAddPost = () => {
    navigate("/addpost");
  };
  return (
    <Grid container>
      <Toolbar>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <TextWrap>SkillupAfrica Blog</TextWrap>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab value="1" label="Home" style={{ marginLeft: 100 }} />
            <Tab value="2" label="Article" />
            <Tab value="3" label="ContactUs" />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={4} md={12} lg={10} style={{ marginLeft: 30 }}>
          <FacebookRoundedIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </Grid>
        <Grid item xs={12} sm={6} md={12} lg={12}>
          <PostArticle onClick={navAddPost}>Post your Article</PostArticle>
        </Grid>
      </Toolbar>

      <Divider />
      {/*</Grid><Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Home" />
          <Tab value="two" label="Article" />
          <Tab value="three" label="Contact Us" />
        </Tabs>
      </Box>
      <FacebookRoundedIcon />
      <TwitterIcon />
      <InstagramIcon />
      <YouTubeIcon />
      <PostArticle onClick={navAddPost}>Post your Article</PostArticle>
      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/home/article" element={<Article />} />
        <Route path="/home/aboutus" element={<AboutUs />} />
        <Route path="/home/addpost" element={<AddPost />} />
  </Routes>*/}
    </Grid>
  );
};
export default Home;
