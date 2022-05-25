import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import React from 'react';
import User from "../pages/Profil";

function Routeur() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<User/>} />
      </Routes>
    </>
  );
}

export default Routeur;