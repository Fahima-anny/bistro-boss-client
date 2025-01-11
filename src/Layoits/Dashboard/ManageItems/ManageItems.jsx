import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../Components/Hooks/useMenu";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {

// eslint-disable-next-line no-unused-vars
const [menu, loading, refetch] = useMenu() ;
const axiosSecure = useAxiosSecure() ;
const handleDeleteItem = (item) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
const res = await axiosSecure.delete(`/menu/${item._id}`)
console.log(res.data);

if(res.data.deletedCount > 0){
  refetch() ;
  Swal.fire({
    title: "Deleted!",
    text: `${item.name} has been deleted.`,
    icon: "success"
  });
}
    }
  });
}

    return (
        <div>
            <SectionTitle
            heading="Manage All Items"
            para="---Hurry Up---"
            ></SectionTitle>

<div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price Color</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
    menu.map( (item, idx) =>   <tr key={idx}>
    <th>
     {idx+1}
    </th>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-16 w-16">
            <img
              src={item.image}
              alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </div>
    </td>
    <td className="text-xl font-medium">
      {item.name}
    </td>
    <td className="text-xl font-medium">
     $ {item.price}
    </td>
    <td>
   <Link to={`/dashboard/updateItem/${item._id}`}>
   <button
       className="bg-[#d1a054] hover:bg-[#be8d42] duration-300 rounded-md p-2 text-xl text-white"><FaRegEdit /></button>
   </Link>
    </td>
    <td>
      <button
      onClick={() => handleDeleteItem(item)}
      className="bg-red-500 hover:bg-red-600 duration-300 rounded-md p-2 text-xl text-white"><MdDeleteForever/></button>
    </td>
  </tr>)
    }
    </tbody>
  </table>
</div>
</div>

        </div>
    );
};

export default ManageItems;