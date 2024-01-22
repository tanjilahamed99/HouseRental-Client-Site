import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import SignUp from "../Pages/signUp";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: 'hello'
            },
        ]
    }
])
export default Route;