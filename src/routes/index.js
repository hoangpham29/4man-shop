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
import Category from "../pages/Category";
import Dashboard from "../pages/Admin/Dashboard";
import CategoryAdmin from "../pages/Admin/Category/CategoryAdmin";
import CategoryAdd from "../pages/Admin/Category/CategoryAdd";
import CategoryEdit from "../pages/Admin/Category/CategoryEdit";
import ProductList from "../pages/Admin/Product/ProductList";
import ProductAdd from "../pages/Admin/Product/ProductAdd";
import ProductEdit from "../pages/Admin/Product/ProductEdit";
import AdminLoginPage from "../pages/Admin/AdminLoginPage";

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
  { path: routesConfig.detailCategory, component: Category },
];

//private routes
const privateRoutes = [
  { path: routesConfig.admin, component: Dashboard },
  { path: routesConfig.adminCategory, component: CategoryAdmin },
  { path: routesConfig.adminCategoryAdd, component: CategoryAdd },
  { path: routesConfig.adminCategoryEdit, component: CategoryEdit },
  { path: routesConfig.adminProduct, component: ProductList },
  { path: routesConfig.adminProductAdd, component: ProductAdd },
  { path: routesConfig.adminProductEdit, component: ProductEdit },
  { path: routesConfig.adminLogin, component: AdminLoginPage, layout: null },
];

export { publicRoutes, privateRoutes };
