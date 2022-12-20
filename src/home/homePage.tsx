import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import Home from "./homePage";
import {
  Header,
  TextWrap,
  Navbar,
  SocialIcon,
  PostArticle,
} from "./home.styled";

import FacebookLogo from "../assets/images/FacebookLogo.png";
import TwitterLogo from "../assets/images/TwitterLogo.png";
import InstagramLogo from "../assets/images/InstagramLogo.png";
import YouTubeLogo from "../assets/images/YouTubeLogo.png";
import { Container } from "../registration/registration.styled";
//import Article from "../article/article";
//import AboutUs from "../aboutUs/about-us";

const HomePage = () => {
  const navigate = useNavigate();
  const navAddPost = () => {
    navigate("/addpost");
  };
  return (
    <Container>
      <Header>
        <TextWrap>SkillupAfrica Blog</TextWrap>
        <Navbar style={{ marginLeft: 251 }}>
          <Link to="/home">Home</Link>
        </Navbar>
        <Navbar>
          <Link to="/home/article">Articles</Link>
        </Navbar>
        <Navbar>
          <Link to="/home/aboutus">About Us</Link>
        </Navbar>
        {/*<Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/article" element={<Article />} />
          <Route path="/home/aboutus" element={<AboutUs />} />
        </Routes>*/}
        <SocialIcon style={{ marginLeft: 82 }} src={FacebookLogo} />
        <SocialIcon src={TwitterLogo} />
        <SocialIcon src={InstagramLogo} />
        <SocialIcon src={YouTubeLogo} />
        <PostArticle onClick={navAddPost}>Post your Article</PostArticle>
      </Header>
    </Container>
  );
};
export default HomePage;
