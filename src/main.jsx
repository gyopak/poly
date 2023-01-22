import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import Schedule from './Schedule'
import Alarms from './Alarms'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/alarms",
    element: <Alarms />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
