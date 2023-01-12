import React from "react";
import { Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import Registration from "./components/registration";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home";
import Login from "./components/login";
import AddPost from "./components/add-post";
import Articles from "./components/article";
import Article from "./components/article/article";
import ContactUs from "./components/contact-us";
import Edit from "./components/edit-article/edit-article";
import TechArticle from "./components/tech-update/tech-article";
function App() {
  const location = useLocation();
  return (
    <Grid container>
      {location.pathname !== `/` && location.pathname !== `/login` ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/tech-article/:id" element={<TechArticle />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Grid>
  );
}
export default App;
