import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  numberCart: 0,
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
        itemInCart.quantity++;
      } else {
        state.carts.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.cost,
        });
      }
    },
    deleteCart: (state, action) => {
      const itemCart = state.carts.filter(
        (item) => item.id !== action.payload.id
      );
      state.carts = itemCart;
    },
    increaseQuantity: (state, action) => {
      const newCart = state.carts.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      state.carts = newCart;
    },
    decreaseQuantity: (state, action) => {
      const _newCart = state.carts.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
      state.carts = _newCart;
    },
    clearCart: (state) => {
      state.carts = [];
    },
  },
});

export default cartsSlice;
