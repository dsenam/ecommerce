import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddProduct } from "../pages/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
]);
