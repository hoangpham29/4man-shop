const routes = {
  home: "/",
  products: "/products",
  detailproducts: "/products/:id",
  cart: "/cart",
  login: "/login",
  signup: "/signup",
  checkout: "/checkout",
  payment: "/payment",
  success: "/success",
  contact: "/contact",
  category: "/category",
  detailCategory: "/category/:id",
  admin: "/admin",
  adminCategory: "/admin/categories",
  adminCategoryAdd: "/admin/categories/add",
  adminCategoryEdit: "/admin/categories/:id/edit",
  adminProduct: "/admin/products",
  adminProductEdit: "/admin/products/:id/edit",
  adminProductAdd: "/admin/products/add",
  adminLogin: "/admin/login",
  pageNotFound: "*",
};

export default routes;
