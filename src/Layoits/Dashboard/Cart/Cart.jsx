import { RiDeleteBin6Fill } from "react-icons/ri";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {

const [cart, refetch] = useCarts() ;
const totalPrice = cart.reduce((total, item) => total + item.price , 0)
const axiosSecure = useAxiosSecure() ;

const handleDeleteOrder = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
axiosSecure.delete(`/carts/${id}`)
.then(res => {
    console.log(res.data);
    if(res.data.deletedCount > 0){
        refetch() ;
          Swal.fire({
          title: "Deleted!",
          text: "Item has been deleted.",
          icon: "success"
        });
    }
})
        }
      });
}

    return (
        <div>
<div className="flex justify-between items-center">
<h2 className="text-center text-3xl font-bold font-serif uppercase">Total orders: <span className="font-sans">{cart.length}</span></h2>
<h2 className="text-center text-3xl font-bold font-serif uppercase">Total price: <span className="font-sans">${totalPrice}</span></h2>
<button className="btn btn-warning">Pay</button>
</div>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th> </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

{
    cart.map((item,idx) => <tr key={item._id} >
        <th>
         {idx+1}
        </th>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle h-20 w-20">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>
        <h3 className="text-xl font-semibold text-gray-500 "> {item.name}</h3>
        </td>
        <td>
        <h3 className="text-xl font-semibold text-gray-500 "> {item.price}</h3>
        </td>
        <th>
          <button
          onClick={() => handleDeleteOrder(item._id)}
          className="btn bg-red-500 hover:bg-red-700 duration-300 text-2xl text-white">
          <RiDeleteBin6Fill  />
          </button>
        </th>
      </tr> )
}



    </tbody>
  </table>
</div>

        </div>
    );
};

export default Cart;