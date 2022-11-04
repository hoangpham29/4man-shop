import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";
import routesConfig from "../../config/routes";
import { useDispatch } from "react-redux";
import styles from "./Items.module.scss";
import cartsSlice from "../../redux/cartsSlice/cartsSlice";

const Item = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    request
      .get("/hotclothes")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const products = items.slice(0, 8);

  const hanldeAddCart = (product) => {
    dispatch(cartsSlice.actions.addCart(product));
  };

  return (
    <div className={styles.wrapper}>
      {products.map((item) => (
        <div key={item.id} className={styles.wrap_product}>
          <div className={styles.container}>
            <img
              className={styles.img_product}
              src={item.image}
              width={250}
              alt="product"
            />
            <div
              className={styles.add_cart}
              onClick={() => hanldeAddCart(item)}
            >
              <AddShoppingCartIcon />
            </div>
          </div>
          <div className={styles.parent_avt_product}>
            <img
              className={styles.avt_product}
              src={item.image}
              alt="product"
            />
          </div>
          <div>
            <Link
              to={routesConfig.products + "/" + item.id}
              className={styles.name_product}
            >
              {item.name}{" "}
            </Link>
            <div className={styles.cost_product}>{item.cost} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
