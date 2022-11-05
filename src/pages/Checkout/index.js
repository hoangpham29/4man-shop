import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import styles from "./checkout.module.scss";

const Checkout = () => {
  const [value, setValues] = useState("+84");

  const handleChange = (newValue) => {
    setValues(newValue);
  };

  const errorPhone = matchIsValidTel(value);
  console.log(errorPhone);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <label className={styles.title_checkout}>
        Delivery contact information
      </label>
      <label>Name:</label>
      <OutlinedInput
        className={styles.input_info}
        {...register("name", {
          required: true,
        })}
        placeholder="Name"
      />
      {errors?.name?.type === "required" && <p>Name is required!</p>}
      <label>Email:</label>
      <OutlinedInput
        className={styles.input_info}
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.type === "required" && <p>Email is required!</p>}
      {errors.email?.type === "pattern" && <p>Invalid Email Address!</p>}
      <label>Phone Number:</label>

      <MuiTelInput
        value={value}
        onChange={handleChange}
        className={styles.input_phone}
      />

      <Button
        className={styles.btn_checkout}
        type="submit"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Checkout
      </Button>
    </form>
  );
};

export default Checkout;
