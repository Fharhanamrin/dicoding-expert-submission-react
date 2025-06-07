import { StrictMode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import ReactDOM from "react-dom/client";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ChatterDetail from "./pages/ChatterDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/detail',
    element: <ChatterDetail />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/account',
    element: <Account />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
