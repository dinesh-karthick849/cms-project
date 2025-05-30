 // src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;

