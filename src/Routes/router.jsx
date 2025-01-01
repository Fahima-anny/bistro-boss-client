import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layoits/Main";
import Home from "../Layoits/Home/Home";
import Menu from "../Layoits/Menu/Menu";
import Order from "../Layoits/Order/Order/Order";


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
            path: '/order/:category',
            element: <Order></Order>
        },
      ]
    },
  ]);



export default router;