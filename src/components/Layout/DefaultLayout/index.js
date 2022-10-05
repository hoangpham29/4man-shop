import Navbar from "./Navbar";
import Banner from "./Banner";
import Content from "./Content";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
}

export default DefaultLayout;
