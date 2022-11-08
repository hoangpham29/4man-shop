import logo from "../../assets/images/logo.png";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="" />
    </div>
  );
};

export default Logo;
