import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "../components/Content";
import NewProduct from "../components/NewProduct";
import Footer from "../components/Footer";

const DefaultLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Content />
            <NewProduct />
            <Footer />
        </div>
    );
};

export default DefaultLayout;
