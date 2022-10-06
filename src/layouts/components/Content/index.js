//import request from "../../../utils/request";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <div className={styles.text}>THỜI TRANG HOT NHẤT</div>
          <div className={styles.productItems}></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
