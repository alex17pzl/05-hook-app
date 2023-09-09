import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
