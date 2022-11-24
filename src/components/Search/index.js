/* eslint-disable react-hooks/exhaustive-deps */
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, CircularProgress, Modal, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./search.module.scss";
import debounce from "lodash.debounce";
import { searchProduct } from "../../utils/product";
import { formatPrice } from "../../utils/auth_error_code";

const SearchModal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNavigate = (idProduct) => {
    navigate(`/products/${idProduct}`);
    setProducts(undefined);
    setOpen(false);
  };
  const updateKeyword = (e) => setKeyword(e.target.value);
  const handleChangeInput = debounce(updateKeyword, 500);

  const searchProductt = async (keyword) => {
    try {
      setLoading(true);
      const { data } = await searchProduct(keyword);
      setProducts(data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (keyword.trim() !== "" && keyword !== undefined) {
      searchProductt(keyword);
    } else {
      setProducts(undefined);
    }
  }, [keyword]);
  return (
    <>
      <Tooltip>
        <IconButton
          className={styles.btnIcon}
          size="large"
          aria-label="search"
          color="secondary"
          onClick={handleOpen}
        >
          <SearchIcon className={styles.icon} />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.style_modal}>
          <input
            className={styles.input_search}
            placeholder="Search product!"
            onKeyUp={handleChangeInput}
          />
          {loading ? <CircularProgress className={styles.loading} /> : null}
          {products && (
            <div className={styles.list_product_search}>
              {products.map((product, rowIndex) => (
                <div className={styles.product_item} key={rowIndex}>
                  <div>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div onClick={() => handleNavigate(product.id)}>
                    <span className={styles.name}>{product.name}</span>
                    <p className={styles.price}>
                      {formatPrice.format(product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {products?.length === 0 && (
            <div className={styles.list_product_search}>
              <p className={styles.no_result}>No results</p>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default SearchModal;
