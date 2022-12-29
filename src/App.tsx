import React from "react";
import { Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import Registration from "./components/registration";
//import { useGoogleLogin } from "@react-oauth/google";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home";
import Login from "./components/login";
import AddPost from "./components/add-post";
import Article from "./components/article";
import ContactUs from "./components/contact-us";
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
        <Route path="/article" element={<Article />} />
      </Routes>
    </Grid>
  );
}
export default App;
