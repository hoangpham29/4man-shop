import styles from "./Banner.module.scss";
import url from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div>
      <img className={styles.banner} src={url} alt="banner" />
    </div>
  );
};

export default Banner;
