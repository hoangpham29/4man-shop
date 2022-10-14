import {
    ADD_CART,
    DELETE_CART,
    INCREASE_CART,
    DECREASE_CART,
} from "./actionTypes";

const addCart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart,
    };
};

const deleteCart = (cart) => {
    return {
        type: DELETE_CART,
        payload: cart,
    };
};

const increaseCart = (cart) => {
    return {
        type: INCREASE_CART,
        payload: cart,
    };
};

const decreaseCart = (cart) => {
    return {
        type: DECREASE_CART,
        payload: cart,
    };
};
