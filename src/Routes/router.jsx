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
import AddItems from "../Layoits/Dashboard/Additems/AddItems";
import AdminRoutes from "./AdminRoutes";


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
      // normal user routes 
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin only routes 
      {
        path: 'allUsers',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'addItems',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      }
    ]
  }
]);



export default router;