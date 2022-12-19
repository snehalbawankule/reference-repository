import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./homePage";
import { Header, TextWrap, Navbar } from "./home.styled";
import { Container } from "../registration/registration.styled";
import Article from "../article/article";
import AboutUs from "../aboutUs/about-us";

const HomePage = () => {
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
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/article" element={<Article />} />
          <Route path="/home/aboutus" element={<AboutUs />} />
        </Routes>
      </Header>
    </Container>
  );
};
export default HomePage;
