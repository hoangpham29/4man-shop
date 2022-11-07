import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";
import routesConfig from "../../config/routes";
import { useDispatch } from "react-redux";
import styles from "./products.module.scss";
import cartsSlice from "../../redux/cartsSlice/cartsSlice";

const Products = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const limitedProduct = 12;

  const count = Math.ceil(items.length / limitedProduct);

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

  const indexOfLastProduct = currentPage * limitedProduct;
  const indexOfFirstProduct = indexOfLastProduct - limitedProduct;

  const products = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const hanldeAddCart = (product) => {
    dispatch(cartsSlice.actions.addCart(product));
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <div className={styles.text}>THỜI TRANG</div>
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

      <Stack className={styles.pagination} spacing={2}>
        <Pagination
          count={count || 10}
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default Products;
