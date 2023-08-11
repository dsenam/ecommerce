import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddProduct } from "../pages/AddProduct";
import { ROUTES } from "../constants/routes.constants";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.CREATE_PRODUCT,
    element: <AddProduct />,
  },
]);
