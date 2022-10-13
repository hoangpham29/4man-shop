import React, { useState } from "react";
import styles from "./counter.module.scss";

const Btn = ({ children, onClick }) => (
    <button className={styles.btn_style} onClick={onClick}>
        {children}
    </button>
);

const Counter = () => {
    const [counter, updateCounter] = useState(0);

    const handleIncrement = () => {
        updateCounter(counter + 1);
    };

    const handleDecrement = () => {
        updateCounter(counter <= 0 ? 0 : counter - 1);
    };

    return (
        <div className={styles.wrapper}>
            <Btn onClick={handleDecrement}>-</Btn>
            <div className={styles.text_style}>{counter}</div>
            <Btn onClick={handleIncrement}>+</Btn>
        </div>
    );
};

export default Counter;
