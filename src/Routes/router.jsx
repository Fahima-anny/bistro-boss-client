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
import Dashboard from "../Layoits/Dashboard/Dashboard";
import Cart from "../Layoits/Dashboard/Cart/Cart";
import AllUsers from "../Layoits/Dashboard/AllUsers/AllUsers";


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
        element: <Order></Order>,
        loader: () => fetch("http://localhost:5000/menuItem")
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);



export default router;