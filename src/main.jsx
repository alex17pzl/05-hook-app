import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { HomePage } from './09-useContext/HomePage';
import { AboutPage } from './09-useContext/AboutPage';
import { LoginPage } from './09-useContext/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
