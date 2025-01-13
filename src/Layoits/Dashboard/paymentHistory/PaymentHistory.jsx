import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Providers/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

const {user} = useAuth() ;
const axiosSecure = useAxiosSecure() ;

const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async() => {
        const res = await axiosSecure.get(`/payments/${user.email}`)
        return res.data ;
    }
})

    return (
        <div>
           <h2 className="text-center text-3xl font-bold font-serif uppercase">Payment History: <span className="font-sans">{payments.length}</span></h2>

<div>
<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Bill</th>
        <th>Transaction ID</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map( (p,idx) =><tr key={p._id}>
        <th>{idx+1}</th>
        <td>${p.price}</td>
        <td>{p.transactionId}</td>
        <td>{p.date}</td>
        <td>{p.status}</td>
      </tr>)}
    </tbody>
  </table>
</div>
</div>

        </div>
    );
};

export default PaymentHistory;