import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../ui/user/Login";
import { Home } from "../ui/pages/Home";
// import the pages

// // import the context
// import { AuthProvider } from "../context/AuthContext";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>test not found</div>} />
        {/* <PrivateRoute path="/profile" component={Profile} /> */}
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
};
