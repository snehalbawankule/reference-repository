import React from "react";
//import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Registration from "./registration/registration";
import Home from "./home/homePage";
//import Regi from "./registration/regi";
import Login from "./login/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
