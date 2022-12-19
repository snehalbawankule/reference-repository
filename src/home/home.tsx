import { Link } from "react-router-dom";
//import { NavbarContainer,NavbarLinkContainer} from './home.styled';
import { Container, TextWrap4 } from "../registration/registration.styled";
import React from "react";
const Home = () => {
  return (
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
  );
};
export default Home;
