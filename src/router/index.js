import Product from "../pages/Product";
import Home from "../pages/Home";
export default [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/product/:id",
    component: Product,
    name: "product",
    props: true
  }
];
