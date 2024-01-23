import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import SignUp from "../Pages/signUp";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyHouses from "../Pages/MyHouses";
import CreateHouseAdd from "../Pages/CreateHouseAdd";
import ManageHouse from "../Pages/ManageHouse";

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
                element: <PrivateRoute><MyHouses /></PrivateRoute>
            },
            {
                path: '/dashboard/createHouseAdd',
                element: <PrivateRoute><CreateHouseAdd /></PrivateRoute>
            },
            {
                path: '/dashboard/manageHouse',
                element: <PrivateRoute><ManageHouse /></PrivateRoute>
            },
        ]
    }
])
export default Route;