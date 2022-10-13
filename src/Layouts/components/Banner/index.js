import styles from "./Banner.module.scss";
import url from "../../../assets/images/banner.jpg";

const Banner = () => {
    return (
        <div>
            <img className={styles.banner} src={url} />
        </div>
    );
};

export default Banner;
