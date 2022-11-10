import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import styles from "./checkoutForm.module.scss";
import toastr from "toastr";
import { card_error, validation_error } from "../utils/auth_error_code";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: process.env.REACT_APP_URL_SUCCESS,
      },
    });

    if (error.type === card_error || error.type === validation_error) {
      toastr.error(error.message);
    } else {
      toastr.error("An unexpected error occurred");
    }

    setIsProcessing(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <PaymentElement id="payment-element" />
        <button disabled={isProcessing || !stripe || !elements} id="submit">
          <span id="button-text">
            {isProcessing ? "Processing ..." : "Pay now"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
