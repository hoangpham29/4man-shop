import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import styles from "./cart.module.scss";
import cartsSlice from "../../redux/cartsSlice/cartsSlice";
import { Button } from "@mui/material";
import { formatPrice } from "../../utils/auth_error_code";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { carts } = useSelector(({ carts }) => carts);

  const total = carts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const hanldeDeleteCart = (id) =>
    dispatch(cartsSlice.actions.deleteCart({ id }));

  const decreaseQuantity = (id, quantity) => {
    if (quantity === 1) {
      return;
    }
    dispatch(cartsSlice.actions.decreaseQuantity({ id, quantity }));
  };

  const increaseQuantity = (id) => {
    dispatch(cartsSlice.actions.increaseQuantity(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <table>
          <tbody>
            <tr className={styles.title_cart}>
              <th className={styles.title_name} colSpan={2}>
                Product
              </th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </tbody>

          <tbody>
            {carts.map((cart) => (
              <tr className={styles.cart_products} key={cart.id}>
                <td className={styles.name_product} colSpan={2}>
                  <div className={styles.wrap_name_img}>
                    <img
                      className={styles.wrap_name_img_img}
                      src={cart.image}
                      alt="product"
                    />
                    <div className={styles.wrap_name_img_name}>{cart.name}</div>
                  </div>
                </td>
                <td>
                  <div className={styles.quantity_cart}>
                    <button
                      className={styles.decrease_qty}
                      onClick={() => decreaseQuantity(cart.id, cart.quantity)}
                    >
                      -
                    </button>
                    <p>{cart.quantity}</p>
                    <button
                      className={styles.increase_qty}
                      onClick={() => increaseQuantity(cart.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{formatPrice.format(cart.price)}</td>
                <td>
                  <p className={styles.sub_total}>
                    {formatPrice.format(cart.quantity * cart.price)}
                  </p>
                </td>
                <td>
                  <IconButton
                    aria-label="upload picture"
                    component="label"
                    onClick={() => hanldeDeleteCart(cart.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.checkout}>
          <div className={styles.txt_total}>
            <span>Total: </span>
            {formatPrice.format(total)}
          </div>

          <Button
            disabled={total === 0}
            className={`${styles.btn_checkout} ${total ? styles.disabled : ""}`}
            variant="contained"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
