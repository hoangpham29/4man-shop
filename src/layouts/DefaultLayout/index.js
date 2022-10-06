import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "../components/Content";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Content />
        </div>
    );
};

export default DefaultLayout;
