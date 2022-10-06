import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState, useEffect } from "react";
import request from "../../utils/request";
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
                <div key={item.id}>
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
                        <img
                            className={styles.avt_product}
                            src={item.image}
                            // width={50}
                        />
                    </div>
                    <div>
                        <div className={styles.name_product}>{item.name} </div>
                        <div className={styles.cost_product}>{item.cost} </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Item;
