import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import styles from "./cart.module.scss";
import {
    DeleteCart,
    IncreaseQuantity,
    DecreaseQuantity,
} from "../../../actions/actions";

const Cart = () => {
    const carts = useSelector((state) => state.carts);
    const dispatch = useDispatch();
    const hanldeDeleteCart = (id) => dispatch(DeleteCart({ id }));
    const decreaseQuantity = (id, quantity) => {
        if (quantity === 1) {
            return;
        }
        dispatch(DecreaseQuantity({ id, quantity }));
    };
    const increaseQuantity = (id) => dispatch(IncreaseQuantity({ id }));

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <table>
                    <tbody>
                        <tr className={styles.title_cart}>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </tbody>

                    <tbody>
                        {carts.map((cart) => (
                            <tr className={styles.cart_products} key={cart.id}>
                                <td>{cart.name}</td>
                                <td>
                                    <img
                                        className={styles.img}
                                        src={cart.image}
                                        alt="product"
                                    />
                                </td>
                                <td>
                                    <div className={styles.quantity_cart}>
                                        <button
                                            className={styles.decrease_qty}
                                            onClick={() =>
                                                decreaseQuantity(
                                                    cart.id,
                                                    cart.quantity
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{cart.quantity}</span>
                                        <button
                                            className={styles.increase_qty}
                                            onClick={() =>
                                                increaseQuantity(cart.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>{cart.price}</td>
                                <td>{cart.quantity * cart.price}</td>
                                <td>
                                    <IconButton
                                        aria-label="upload picture"
                                        component="label"
                                        onClick={() =>
                                            hanldeDeleteCart(cart.id)
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
