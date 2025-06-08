import {
    createBrowserRouter,
} from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ChatterDetail from "../pages/ChatterDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Account from "../pages/Account";


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
export default router;