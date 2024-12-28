import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layoits/Main";
import Home from "../Layoits/Home/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);



export default router;