import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Si decides utilizar las páginas y el contexto en el futuro, descomenta las importaciones
// import the pages

// import the context
// import { AuthProvider } from "../context/AuthContext";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="*" element={<div>test not found</div>} />
        {/* Si decides utilizar estas rutas en el futuro, descomenta las siguientes líneas y asegúrate de importar los componentes correspondientes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
