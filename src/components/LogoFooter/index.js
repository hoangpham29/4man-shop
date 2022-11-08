import logoFooter from "../../assets/images/logoFooter.png";
import styles from "./logoFooter.module.scss";

const LogoFooter = () => {
  return (
    <div>
      <img className={styles.logoFooter} src={logoFooter} alt="" />
    </div>
  );
};

export default LogoFooter;
