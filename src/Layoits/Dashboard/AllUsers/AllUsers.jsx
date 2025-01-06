import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

const axiosSecure = useAxiosSecure() ;
const {data: users = [], refetch} = useQuery({
    queryKey:  ['users'] ,
    queryFn: async () => {
        const res = await axiosSecure.get('/users') ;
        return res.data ;
    }
})

const handleMakeAdmin = (user) => {
axiosSecure.patch(`/users/admin/${user._id}`)
.then(res => {
    console.log(res.data);
    if(res.data.modifiedCount > 0) {
        refetch() ;
        Swal.fire({
            icon: "success",
            title: `${user.name} is now an ADMIN`,
            showConfirmButton: false,
            timer: 1500
          });
    }
})
}

const handleDeleteUser = (user) => {
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
axiosSecure.delete(`/users/${user._id}`)
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
           <SectionTitle
           heading={"MANAGE ALL USERS"}
           para={"---How Many??---"}
           ></SectionTitle>

<div>
    <h1 className="text-2xl font-serif font-bold uppercase py-3">Total Users : {users.length}</h1>
</div>

<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{
users.map((user,idx) =>    <tr key={user._id}>
    <th>{idx+1}</th>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>
 {
    user.role === 'admin' ? "Admin"
    :  <button
    onClick={() => handleMakeAdmin(user)}
    className="text-lg rounded text-white p-2 bg-orange-500 hover:bg-orange-600">
        <FaUsers /></button>
 }
    </td>
    <td>
        <button
        onClick={() => handleDeleteUser(user)}
        className="text-lg rounded text-white p-2 bg-red-500 hover:bg-red-600"><FaTrashAlt /></button>
    </td>
  </tr>)
}    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUsers;