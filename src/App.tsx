import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Registration from "./registration/registration";
import Home from "./home/home";
import Article from "./article/article";
import AboutUs from "./aboutUs/about-us";
import Login from "./login/login";
class App extends Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/article">Articles</Link>
        <Link to="/aboutus">About us</Link>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </>
    );
  }
}
export default App;
