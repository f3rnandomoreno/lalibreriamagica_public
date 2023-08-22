import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Header from '../components/commons/Header'; // Asegúrate de importar el componente Header
import Home from '../ui/pages/Home';
import Login from '../ui/user/Login';
import Register from '../ui/user/Register';
import NotFound from '../ui/pages/NotFound';

export const AppRoutes = () => {
  const userIsLoggedIn = useTracker(() => !!Meteor.userId());

  return (
    <BrowserRouter>
      {userIsLoggedIn && <Header />} {/* Mostrar el encabezado solo si el usuario está autenticado */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
