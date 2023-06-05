import { useRoutes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '@/views/Home';
import Login from '@/views/Login';

export default function RouterConfig() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
      // children: [
      //   { path: '', element: <Navigate to="user" /> },
      //   {
      //     path: 'user',
      //     element: <User />
      //   }
      // ]
    }
  ]);
}
