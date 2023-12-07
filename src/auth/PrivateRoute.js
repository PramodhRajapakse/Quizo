import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export const AdminRoute = () => {
  const role = localStorage.getItem('role');

  return role === 'ADMIN' ? <Outlet /> : <Navigate to="/" replace />

};

export default PrivateRoute;
