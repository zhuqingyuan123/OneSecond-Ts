import { useRoutes } from 'react-router-dom';
import React from 'react';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Config from '@/views/Config/Config';
import Share from '@/views/Config/Share';
import Integral from '@/views/Config/Integral';
import NotFind from '@/views/NotFind';
import DataScreening from '@/views/DataScreening';
import User from '@/views/User/user'
import Agent from '@/views/User/Agent/agents'
import Admin from '@/views/User/admins'
import Users from '@/views/User/users'

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
        },
        {
          path: 'user',
          element: <User />,
          children: [
            {
              path: 'agents',
              element: <Agent />
            },
            {
              path: 'admins',
              element: <Admin />
            },
            {
              path: 'users',
              element: <Users />
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
