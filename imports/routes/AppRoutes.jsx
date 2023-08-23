import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Header from '../ui/components/commons/Header';
import AuthenticatedHome from '../ui/pages/AuthenticatedHome'; // Componente para usuarios autenticados
import GuestHome from '../ui/pages/GuestHome'; // Componente para usuarios no autenticados
import Login from '../ui/user/Login';
import Register from '../ui/user/Register';
import NotFound from '../ui/pages/NotFound';

export const AppRoutes = () => {
  const userIsLoggedIn = useTracker(() => !!Meteor.userId());

  return (
    <BrowserRouter>
      {userIsLoggedIn && <Header />} {/* Mostrar el encabezado solo si el usuario está autenticado */}
      <Routes>
        <Route path="/" element={userIsLoggedIn ? <AuthenticatedHome /> : <GuestHome />} />
        {!userIsLoggedIn && <Route path="/login" element={<Login />} />}
        {!userIsLoggedIn && <Route path="/register" element={<Register />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
