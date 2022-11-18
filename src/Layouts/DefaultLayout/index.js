import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./defaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
