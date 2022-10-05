import styles from "./Banner.module.scss";
import url from "../../../../assets/images/banner.jpg";
function Banner() {
  return (
    <div>
      <img className={styles.banner} src={url} />
    </div>
  );
}

export default Banner;
