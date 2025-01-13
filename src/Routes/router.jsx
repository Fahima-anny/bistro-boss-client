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
import ManageItems from "../Layoits/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Layoits/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Layoits/Dashboard/Payment/Payment";
import PaymentHistory from "../Layoits/Dashboard/paymentHistory/PaymentHistory";
import UserHome from "../Layoits/Dashboard/UserHome/UserHome";
import AdminHome from "../Layoits/Dashboard/AdminHome/AdminHome";


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
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      // admin only routes 
      {
        path: 'allUsers',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'adminHome',
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: 'addItems',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  }
]);



export default router;