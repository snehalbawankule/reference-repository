import React from "react";
//import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Registration from "./registration/registration";
import Home from "./home/homePage";
import Login from "./login/login";
import AddPost from "./add-post/add-post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
    </>
  );
}
export default App;
