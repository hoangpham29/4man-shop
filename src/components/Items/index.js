import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";
import routesConfig from "../../config/routes";
import styles from "./Items.module.scss";

const Item = () => {
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

    return (
        <div className={styles.wrapper}>
            {items.map((item) => (
                <div key={item.id} className={styles.wrap_product}>
                    <div className={styles.container}>
                        <img
                            className={styles.img_product}
                            src={item.image}
                            width={250}
                        />
                        <div className={styles.add_cart}>
                            <AddShoppingCartIcon />
                        </div>
                    </div>
                    <div className={styles.parent_avt_product}>
                        <img className={styles.avt_product} src={item.image} />
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
