import {
    ADD_CART,
    DELETE_CART,
    INCREASE_CART,
    DECREASE_CART,
} from "../actions/actionTypes";

const initialState = {
    cartAr: [
        {
            id: 1,
            title: "hello world",
        },
    ],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            const productInCart = state.cartAr.find(
                (product) => product.id === action.payload.id
            );
            if (productInCart) {
                const newCart = state.cartAr.map((product) =>
                    product.id === action.payload.id
                        ? {
                              ...product,
                              quantity:
                                  product.quantity + action.payload.quantity,
                          }
                        : product
                );
                return {
                    ...state,
                    cartAr: newCart,
                };
            }
            return {
                ...state,
                cartAr: [...state.carts, action.payload],
            };
        case DELETE_CART:
            const filterCart = state.cartAr.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                cartAr: filterCart,
            };
        case INCREASE_CART:
            const newCart = state.cartAr.map((product) =>
                product.id === action.payload
                    ? {
                          ...product,
                          quantity: product.quantity + 1,
                      }
                    : product
            );
            return {
                ...state,
                cartAr: newCart,
            };
        case DECREASE_CART:
            if (action.payload.quantity === 1) {
                const filterCart = state.cartAr.filter(
                    (product) => product.id !== action.payload.id
                );
                return { ...state, cartAr: filterCart };
            }
            const cart = state.cartAr.map((product) =>
                product.id === action.payload.id
                    ? {
                          ...product,
                          quantity: product.quantity - 1,
                      }
                    : product
            );
            return { ...state, cartAr: cart };
        default:
            return state;
    }
};

export default cartReducer;
