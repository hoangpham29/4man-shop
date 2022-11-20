import routesConfig from "../config/routes";

import Products from "../pages/Products";
import Home from "../pages/Home";
import DetailProduct from "../pages/DetailProduct";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Payment from "../stripe/Payment";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import Contact from "../pages/Contact";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.products, component: Products },
  { path: routesConfig.detailproducts, component: DetailProduct },
  { path: routesConfig.cart, component: Cart },
  { path: routesConfig.login, component: Login, layout: null },
  { path: routesConfig.signup, component: SignUp, layout: null },
  { path: routesConfig.payment, component: Payment },
  { path: routesConfig.checkout, component: Checkout },
  { path: routesConfig.success, component: Success },
  { path: routesConfig.contact, component: Contact }, 
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
