import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../ui/user/Login";
import Home from "../ui/pages/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>test not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
