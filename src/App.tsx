import React from "react";
//import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Registration from "./registration/registration";
import Home from "./home/homePage";
//import Regi from "./registration/regi";
import Login from "./login/login";
import AddPost from "./add-post/add-post";
import Article from "./article/article";
import AboutUs from "./aboutUs/about-us";
import Homee from "./home/homee";

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
