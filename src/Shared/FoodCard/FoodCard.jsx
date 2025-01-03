/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Providers/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({item}) => {

const {name, image, price, recipe, _id} = item ;
const {user} = useAuth() ;
const navigate = useNavigate() ;
const location = useLocation() ;
const axiosSecure = useAxiosSecure() ;

const handleAddToCart = (item) => {
  if(user && user.email){
    // sent cart item to DB 
    const cartItem = {
      menuId : _id ,
      name,
      image,
      price,
      email: user.email
    }
    axiosSecure.post("/carts", cartItem)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          icon: "success",
          title: `${name} is added to your cart`,
          showConfirmButton: false,
          timer: 2000
        });
        
      }
    })
  }
  else{
    Swal.fire({
      title: "Please Login",
      text: "You have to login to add item to the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Login Now"
    }).then((result) => {
      if (result.isConfirmed) {
       navigate("/login", {state: location.pathname})
      }
    });
  }
  console.log(item);
}

    return (
        <div className="card bg-base-200 rounded-none">
  <figure>
    <img
     className="w-full"
      src={image}
      alt="Shoes" />
  </figure>
  <p className="absolute bg-black text-white right-3 top-3 py-1 px-3 font-semibold">${price}</p>
  <div className="card-body">
    <h2 className="card-title text-center mx-auto">{name}</h2>
    <p className="text-gray-500">{recipe}</p>
    <div className="card-actions justify-center">
      <button
      onClick={() => handleAddToCart(item)}
      className="bg-base-200 hover:bg-black border-b-4 py-2 px-4 rounded-lg text-yellow-500 border-yellow-500 duration-500 uppercase">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;