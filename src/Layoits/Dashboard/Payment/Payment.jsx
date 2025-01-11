import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk) ;

const Payment = () => {
    return (
        <div>
            <SectionTitle
            heading='Payment'
            para=""
            ></SectionTitle>
            <div>
<Elements stripe={stripePromise}>
<CheckoutForm></CheckoutForm>
</Elements>
            </div>
          
        </div>
    );
};

export default Payment;