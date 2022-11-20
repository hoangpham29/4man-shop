import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  loading: false,
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.carts.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
      const itemCart = state.carts.filter(
        (item) => item.id !== action.payload.id
      );
      state.carts = itemCart;
    },
    increaseQuantity: (state, action) => {
      state.carts.find((item) => item.id === action.payload).quantity++;
    },
    decreaseQuantity: (state, action) => {
      state.carts.find((item) => item.id === action.payload.id).quantity--;
    },
    clearCart: (state) => {
      state.carts = [];
    },
  },
});

export default cartsSlice;
