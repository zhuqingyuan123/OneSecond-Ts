import { useRoutes } from 'react-router-dom';
import React from 'react';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Config from '@/views/Config/Config';
import Share from '@/views/Config/Share';
import Integral from '@/views/Config/Integral';
import NotFind from '@/views/NotFind';
import DataScreening from '@/views/DataScreening';

export default function RouterConfig() {
  return useRoutes([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Home />,
      children: [
        { path: '', element: <DataScreening /> },
        {
          path: 'config',
          element: <Config />,
          children: [
            {
              path: 'share',
              element: <Share />
            },
            {
              path: 'integral',
              element: <Integral />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <NotFind />
    }
  ]);
}
