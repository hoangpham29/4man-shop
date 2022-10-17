import {
    ADD_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    DELETE_CART,
} from "../actions/actions";

const initialState = {
    products: [],
    carts: [],
    numberCart: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.cost,
                };
                state.carts.push(cart);
            } else {
                let check = false;
                state.carts.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.carts[key].quantity++;
                        check = true;
                    }
                    return {
                        ...state,
                    };
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.cost,
                    };
                    state.carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1,
            };
        case INCREASE_QUANTITY:
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

        case DECREASE_QUANTITY:
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
        case DELETE_CART:
            return {
                ...state,
                numberCart: state.carts.length,
                carts: state.carts.filter((item) => {
                    return item.id !== action.payload.id;
                }),
            };
        default:
            return state;
    }
};

export default cartReducer;
