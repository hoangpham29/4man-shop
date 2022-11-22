import Items from "../../../components/Items";
import styles from "./NewProduct.module.scss";

const NewProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.text}>NEW PRODUCTS</div>
        <Items />
      </div>
    </div>
  );
};

export default NewProduct;
