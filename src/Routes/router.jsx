import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layoits/Main";
import Home from "../Layoits/Home/Home";
import Menu from "../Layoits/Menu/Menu";


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
      ]
    },
  ]);



export default router;