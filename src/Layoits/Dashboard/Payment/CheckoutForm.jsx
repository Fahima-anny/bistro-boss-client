import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../Providers/useAuth";


const CheckoutForm = () => {

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCarts();
  const {user} = useAuth() ;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  console.log(totalPrice);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret) ;
        console.log(clientSecret);
      })
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
      if(paymentIntent.status === "succeeded"){
        console.log("transaction id = ", paymentIntent.id);
      }
    }

    // confirm payment 
const  {paymentIntent, error: confirmError } = await stripe.confirmCardPayment( clientSecret, 
  {
    payment_method: {
      card: card ,
      billing_details: {
        email: user?.email || "anonymous",
        name: user.displayName || "anonymous"
      }
    }
  })
if(confirmError){
  console.log("confirm error kahisi");
}
else{
  console.log("payment Intent", paymentIntent);
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
    </form>
  );
};

export default CheckoutForm;