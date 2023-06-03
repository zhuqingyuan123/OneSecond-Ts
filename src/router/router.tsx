import { useRoutes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '@/views/Home';
import Login from '@/views/Login';

export default function RouterConfig() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);
}
