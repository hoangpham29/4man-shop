import NewProducts from "../pages/NewProducts";
import ManShirts from "../pages/ManShirts";
import ManPants from "../pages/ManPants";
import Accessory from "../pages/Accessory";
import Footwear from "../pages/Footwear";
import Promotion from "../pages/Promotion";
import Home from "../pages/Home";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/newproducts", component: NewProducts },
    { path: "/manshirts", component: ManShirts },
    { path: "/manpants", component: ManPants },
    { path: "/accessory", component: Accessory },
    { path: "/footwear", component: Footwear },
    { path: "/promotion", component: Promotion },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
