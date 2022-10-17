import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";
import routesConfig from "../../config/routes";
import { useDispatch } from "react-redux";
import { AddCart } from "../../actions/actions";
import styles from "./Items.module.scss";

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

    const hanldeAddCart = (product) => {
        dispatch(AddCart(product));
    };

    return (
        <div className={styles.wrapper}>
            {items.map((item) => (
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
