import routesConfig from "../config/routes";

import Products from "../pages/Products";
import Home from "../pages/Home";
import DetailProduct from "../components/DetailProduct";
import Cart from "../Layouts/components/Cart";

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.products, component: Products },
    { path: routesConfig.detailproducts, component: DetailProduct },
    { path: routesConfig.cart, component: Cart },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
