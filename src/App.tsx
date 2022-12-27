import React from "react";
//import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/registration/registration";
import Home from "./components/home/home-page";
//import Regi from "./registration/regi";
import Login from "./components/login/login";
import AddPost from "./components/add-post/add-post";
import Article from "./components/article/article";
import AboutUs from "./components/aboutUs/about-us";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </>
  );
}
export default App;
