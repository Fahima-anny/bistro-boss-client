
import {FaBook, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils} from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { MdDateRange, MdPayments, MdShoppingBag } from 'react-icons/md';
import { PiListStarFill } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import { TiContacts } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCarts() ;
const [isAdmin] = useAdmin() ;

    return (
        <div className='flex'>
            <div className='w-72 min-h-screen bg-[#d1a054]'>

<ul className='menu dashboardMenu p-4 space-y-3'>

{
    isAdmin ? <>
    <li><NavLink to="adminHome" className="uppercase py-4 font-bold font-serif"><FaHome className='text-xl'/> Admin Home</NavLink></li>
<li><NavLink to="addItemS" className="uppercase py-4 font-bold font-serif"><FaUtensils className='text-lg'/>Add Item</NavLink></li>
<li><NavLink to="manageItems" className="uppercase py-4 font-bold font-serif"><FaList className='text-xl'/>Manage Items</NavLink></li>
<li><NavLink to="bookings" className="uppercase py-4 font-bold font-serif"><FaBook className='text-xl'/>Manage Bookings</NavLink></li>
<li><NavLink to="allUsers" className="uppercase py-4 font-bold font-serif"><FaUsers className='text-xl'/>All Users</NavLink></li>
    </>
:   <>
<li><NavLink to="userHome" className="uppercase py-4 font-bold font-serif"><FaHome className='text-xl'/> User Home</NavLink></li>
<li><NavLink to="reservation" className="uppercase py-4 font-bold font-serif"><SlCalender className='text-lg'/>Reservation</NavLink></li>
<li><NavLink to="history" className="uppercase py-4 font-bold font-serif"><MdPayments className='text-xl'/> payment history</NavLink></li>
<li><NavLink to="cart" className="uppercase py-4 font-bold font-serif"><FaShoppingCart className='text-xl'/> My Cart ({cart.length})</NavLink></li>
<li><NavLink to="review" className="uppercase py-4 font-bold font-serif"><PiListStarFill className='text-xl'/>Add review</NavLink></li>
<li><NavLink to="booking" className="uppercase py-4 font-bold font-serif"><MdDateRange className='text-xl'/> my Booking</NavLink></li>
</>

}

{/* shared links  */}
<div className='divider divider-neutral'></div>

<li><NavLink to="/" className="uppercase py-4 font-bold font-serif"><FaHome className='text-xl'/>Home</NavLink></li>
<li><NavLink to="/menu" className="uppercase py-4 font-bold font-serif"><IoMdMenu className='text-xl'/>Menu</NavLink></li>
<li><NavLink to="/order/pizza" className="uppercase py-4 font-bold font-serif"><MdShoppingBag className='text-xl'/>Shop</NavLink></li>
<li><NavLink to="/" className="uppercase py-4 font-bold font-serif"><TiContacts className='text-xl'/>Contact</NavLink></li>

</ul>
            </div>

            <div className='flex-1 max-w-5xl mx-auto py-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;