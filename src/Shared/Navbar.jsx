import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { RiShoppingCartFill } from "react-icons/ri";


const Navbar = () => {

  const {user, logout} = useContext(AuthContext) ;

  const handleLogout = () => {
    logout()
    .then( () => console.log("logged out"))
    .catch( er => console.log(er))
  }

const navlinks = 
<>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/menu'>Menu</NavLink></li>
<li><NavLink to='/order/pizza'>Order Food</NavLink></li>

{/* {
  user ? <><button onClick={handleLogout} className="">Logout</button></> : <li><NavLink to='/login'>Login</NavLink></li>
} */}
</>

    return (
   <div className="bg-black bg-opacity-50 z-10 fixed navbar">
         <div className="navbar text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Bistro <span className="text-yellow-500">Boss</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navlinks}
          </ul>
        </div>
        <div className="navbar-end gap-7 items-center">
          {
            <Link to='/'>
            <button className="indicator btn btn-ghost">
<div className="badge badge-warning indicator-item right-2 top-2">0</div>
            <RiShoppingCartFill className="text-3xl" />
            </button>
            </Link>
          }
          <a className="btn">
          {
  user ? <><button onClick={handleLogout} className="">Logout</button></> : <Link to='/login'>Login</Link>
}
          </a>
        </div>
      </div>
   </div>
    );
};

export default Navbar;