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
            const itemInCart = state.carts.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.carts.push({ ...action.payload, quantity: 1, price: action.payload.cost });
            }
        },
        deleteCart: (state, action) => {
            return {
                ...state,
                numberCart: state.carts.length,
                carts: state.carts.filter((item) => {
                    return item.id !== action.payload.id;
                }),
            };
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

            return {
                ...state,
                carts: newCart,
            };
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

            return {
                ...state,
                carts: _newCart,
            };
        },
    },
});

export default cartsSlice;
