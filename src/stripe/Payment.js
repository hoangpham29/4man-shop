import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const getClientSecret = async () => {
    const { data } = await axios.post(process.env.REACT_APP_GET_CLISECRET);
    setClientSecret(data.clientSecret);
  };

  const getPublishableKey = async () => {
    const { data } = await axios.get(process.env.REACT_APP_GET_PUBKEY);
    setStripePromise(loadStripe(data.publishableKey));
  };

  useEffect(() => {
    getClientSecret();
    getPublishableKey();
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
