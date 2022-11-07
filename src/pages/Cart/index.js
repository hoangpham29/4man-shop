import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import styles from "./cart.module.scss";
import cartsSlice from "../../redux/cartsSlice/cartsSlice";
import { Button } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { formatPrice } from "../../utils/auth_error_code";
import { useEffect } from "react";
import toastr from "toastr";
import { succeeded } from "../../utils/auth_error_code";

const Cart = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const carts = useSelector((state) => state.carts.carts);

  const total = carts.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  useEffect(() => {
    if (searchParams.get("redirect_status") === succeeded) {
      dispatch(cartsSlice.actions.clearCart());
      toastr.success("Payment success!");
    }
  }, [dispatch, searchParams]);

  const hanldeDeleteCart = (id) =>
    dispatch(cartsSlice.actions.deleteCart({ id }));

  const decreaseQuantity = (id, quantity) => {
    if (quantity === 1) {
      return;
    }
    dispatch(cartsSlice.actions.decreaseQuantity({ id, quantity }));
  };

  const increaseQuantity = (id) =>
    dispatch(cartsSlice.actions.increaseQuantity({ id }));

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
                <td className={styles.name_product}>{cart.name}</td>
                <td>
                  <img className={styles.img} src={cart.image} alt="product" />
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
                  <p style={{ width: 100, marginInline: "auto" }}>
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
          <Link to={"/checkout"}>
            {total > 0 ? (
              <Button className={styles.btn_checkout} variant="contained">
                Checkout
              </Button>
            ) : (
              <Button
                sx={{ width: "150px", height: "40px", fontSize: "13px" }}
                disabled
                variant="contained"
              >
                Checkout
              </Button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
