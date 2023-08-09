import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { HomeTemplate } from "../components/templates/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeTemplate />
    },
  ]);