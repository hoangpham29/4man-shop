import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <div className={styles.text}>THỜI TRANG HOT NHẤT</div>
          <div className={styles.productItems}>
            <div className={styles.productItem}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
