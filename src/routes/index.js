import Products from "../pages/Products";
import Home from "../pages/Home";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/products", component: Products },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
