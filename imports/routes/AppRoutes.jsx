import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../ui/user/Login";
import Home from "../ui/pages/Home";
import Register from "../ui/user/Register"; // Importar el componente Register
import NotFound from "../ui/pages/NotFound"; // Importar el componente NotFound

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Ruta para Register */}
        <Route path="*" element={<NotFound />} /> {/* Ruta para NotFound */}
      </Routes>
    </BrowserRouter>
  );
};
