import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import request from "../../utils/request";
import styles from "./DetailProduct.module.scss";

const DetailProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        request
            .get("/hotclothes/" + id)
            .then((res) => {
                setItem(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.all_img}>
                    <div className={styles.color_product}>
                        <img
                            className={styles.avt_product}
                            src={item.image}
                            alt=""
                        />
                        <img
                            className={styles.avt_product}
                            src={item.image}
                            alt=""
                        />
                        <img
                            className={styles.avt_product}
                            src={item.image}
                            alt=""
                        />
                    </div>
                    <img
                        className={styles.img_product}
                        src={item.image}
                        alt=""
                    />
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
                    <div>
                        <div>
                            <div>
                                <span>SIZE*</span>{" "}
                                <a href="https://4menshop.com/giay-the-thao/giay-chelsea-boots-all-black-g018-mau-den-17174.html#Modal-Help-Size">
                                    Hướng dẫn chọn size
                                </a>
                            </div>
                            <Box sx={{ maxWidth: "50%" }}>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
