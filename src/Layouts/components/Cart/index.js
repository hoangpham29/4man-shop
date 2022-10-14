import * as React from "react";
import styles from "./cart.module.scss";

const Cart = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>.</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Cart;
