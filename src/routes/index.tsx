import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { EditProduct } from "../pages/Edit";
import { ROUTES } from "../constants/routes.constants";
import { Checkout } from "../pages/Checkout";
import PaymentFeedback from "../pages/PaymentFeedback";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.CREATE_PRODUCT,
    element: <EditProduct />,
  },

  {
    path: ROUTES.CHECKOUT,
    element: <Checkout />,
  },

  {
    path: ROUTES.PAYMENT_FEEDBACK,
    element: <PaymentFeedback />
  }
]);
