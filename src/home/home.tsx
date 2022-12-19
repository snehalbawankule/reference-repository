import { Link, Routes, Route } from "react-router-dom";
import Article from "../article/article";
import AboutUs from "../aboutUs/about-us";
//import { NavbarContainer,NavbarLinkContainer} from './home.styled';
import { Container, TextWrap4 } from "../registration/registration.styled";
import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Container>
          <TextWrap4 style={{ color: "#2F2E41", paddingLeft: 100 }}>
            SkillupAfrica Blog
          </TextWrap4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/article">Articles</Link>
            <Link to="/aboutus">About us</Link>
          </nav>
        </Container>
      </>
    );
  }
}
export default Home;
