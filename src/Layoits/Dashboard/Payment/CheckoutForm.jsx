import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../Providers/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("")
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart , refetch] = useCarts();
  const { user} = useAuth();
  const navigate = useNavigate() ;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  console.log(totalPrice);

  useEffect(() => {
  if(totalPrice > 0){
    axiosSecure.post("/create-payment-intent", { price: totalPrice })
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
      console.log(clientSecret);
    })
  }
  }, [axiosSecure, totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement)
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    })

    if (error) {
      console.log("payment Error : ", error);
      setError(error.message);
    }
    else {
      console.log("payment method success = ", paymentMethod);
      setError('');
    }

    // confirm payment 
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user.displayName || "anonymous"
          }
        }
      })
    if (confirmError) {
      console.log("confirm error kahisi");
    }
    else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id = ", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment data id the history DB 
        const payment = {
          email: user.email ,
          price: totalPrice ,
          date: new Date(),
          transactionId: paymentIntent.id ,
          cartIds: cart.map(item => item._id) ,
          menuItemIds: cart.map(item => item.menuId) ,
          status: 'Pending'
        }
        const res = await axiosSecure.post("/payments", payment) ;
        console.log("Payment Saved in DB = ",res.data);
        refetch() ;
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/dashboard/paymentHistory")
        }
      }
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit"
        className="btn btn-warning gap-2 bg-[#e8b160] w-32 mt-5"
        disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {
        transactionId && <p className="text-green-600">{transactionId}</p>
      }
    </form>
  );
};

export default CheckoutForm;