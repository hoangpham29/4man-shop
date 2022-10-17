//import request from "../utils/request";

export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

export function AddCart(payload) {
    return {
        type: ADD_CART,
        payload,
    };
}

export function DeleteCart(payload) {
    return {
        type: DELETE_CART,
        payload,
    };
}

export function IncreaseQuantity(payload) {
    return {
        type: INCREASE_QUANTITY,
        payload,
    };
}
export function DecreaseQuantity(payload) {
    return {
        type: DECREASE_QUANTITY,
        payload,
    };
}
