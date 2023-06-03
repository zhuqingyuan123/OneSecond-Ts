import { useRoutes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '@/views/Home';

export default function RouterConfig() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);
}
