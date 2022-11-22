import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import routesConfig from "../../config/routes";
import { useDispatch } from "react-redux";
import styles from "./category.module.scss";
import cartsSlice from "../../redux/cartsSlice/cartsSlice";
import Skeleton from "@mui/material/Skeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import toastr from "toastr";
import { read, getOne as show } from "../../utils/category";
import { formatPrice } from "../../utils/auth_error_code";

const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //state
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);

  const limitedProduct = 12;

  const count = Math.ceil(items.length / limitedProduct);

  useEffect(() => {
    getListCategories();
    getCategory(id);
  }, [id]);

  const getListCategories = async () => {
    const { data } = await read();
    setCategories(data);
  };

  const getCategory = async (id) => {
    const { data } = await show(id);
    setCategory(data);
    setItems(data.products);
    setIsLoading(false);
  };

  const indexOfLastProduct = currentPage * limitedProduct;
  const indexOfFirstProduct = indexOfLastProduct - limitedProduct;

  const products = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const hanldeAddCart = (product) => {
    dispatch(cartsSlice.actions.addCart({ ...product, quantity: 1 }));
    toastr.success("Add to cart successfully!");
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return category ? (
    <div>
      <div className={styles.text}>PRODUCTS | {category.name}</div>
      <div className={styles.wrapper_sidebar_content}>
        <div className={styles.sidebar}>
          <div className={styles.title_category}>Category</div>
          <ul className={styles.category}>
            {categories.map((category) => (
              <li key={category.id} className={styles.category_item}>
                <Link to={`${routesConfig.category}/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isLoading ? (
          <Skeleton sx={{ minHeight: 700 }} />
        ) : (
          <div className={styles.wrap_content}>
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
                    <div className={styles.cost_product}>
                      {formatPrice.format(item.price)}
                    </div>
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
        )}
      </div>
    </div>
  ) : null;
};

export default Category;
