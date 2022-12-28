import React from "react";
import { Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Registration from "./components/registration";
import { useGoogleLogin } from "@react-oauth/google";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home";
import Login from "./components/login";
import AddPost from "./components/add-post";
import Article from "./components/article";
import ContactUs from "./components/contact-us";
const App = () => {
  const Login1 = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <Grid container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Grid>
  );
};
export default App;
