import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "../components/Content";
import NewProduct from "../components/NewProduct";

const DefaultLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Content />
            <NewProduct />
        </div>
    );
};

export default DefaultLayout;
