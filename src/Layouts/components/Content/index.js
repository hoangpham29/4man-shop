import Items from "../../../components/Items";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.text}>HOT PRODUCTS</div>
        <Items />
      </div>
    </div>
  );
};

export default Content;
