import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Counter from "../Counter";
import request from "../../utils/request";
import styles from "./DetailProduct.module.scss";

const DetailProduct = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  const getProduct = async (id) => {
    const { data } = await request.get("/hotclothes/" + id);
    setItem(data);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.all_img}>
          <div className={styles.color_product}>
            <img className={styles.avt_product} src={item.image} alt="" />
            <img className={styles.avt_product} src={item.image} alt="" />
            <img className={styles.avt_product} src={item.image} alt="" />
          </div>
          <img className={styles.img_product} src={item.image} alt="" />
        </div>
        <div className={styles.info_product}>
          <div className={styles.name_product}>{item.name}</div>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size="small"
            />
            <span className={styles.text_rating}>
              (128 đánh giá / 64 lượt mua)
            </span>
          </div>
          <div className={styles.cost_product}>
            <span className={styles.text_cost}>Giá bán: </span>
            {item.cost} <span>₫</span>
          </div>
          <div className={styles.option_product}>
            <div className={styles.option_size}>
              <div className={styles.tilte_size}>
                <span>SIZE*</span>{" "}
                <div data-toggle="modal" className={styles.link_size}>
                  Hướng dẫn chọn size!
                </div>
              </div>
              <Box sx={{ maxWidth: "100%" }}>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "size",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={10}>S </option>
                    <option value={20}>M</option>
                    <option value={30}>L</option>
                    <option value={40}>XL</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>
            <div className={styles.option_amount}>
              <div className={styles.name_title}>SỐ LƯỢNG *</div>
              <Counter />
              <Button className={styles.btn_buy} variant="contained">
                <AddShoppingCartIcon sx={{ marginRight: "10px" }} />
                thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
