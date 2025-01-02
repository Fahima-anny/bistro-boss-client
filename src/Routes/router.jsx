import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layoits/Main";
import Home from "../Layoits/Home/Home";
import Menu from "../Layoits/Menu/Menu";
import Order from "../Layoits/Order/Order/Order";
import Login from "../Layoits/Login/Login";
import Signup from "../Layoits/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/order/:category',
            element: <PrivateRoutes><Order></Order></PrivateRoutes>,
            loader: () => fetch("http://localhost:5000/menuItem") 
        },
      ]
    },
  ]);



export default router;