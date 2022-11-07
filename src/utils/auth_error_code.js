const AUTH_ERROR_CODE = {
  "auth/wrong-password": "Incorrect password!",
  "auth/user-not-found": "Email is incorrect!",
  "auth/too-many-requests": "The operation is too fast, please try again!",
  "auth/email-already-in-use": "Email already exists!",
};

export const succeeded = "succeeded";
export const card_error = "card_error";
export const validation_error = "validation_ error";

export const formatPrice = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

export default AUTH_ERROR_CODE;
