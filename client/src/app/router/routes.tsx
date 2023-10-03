import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import { HomePage } from "../../features/home/HomePage";
import { Catalog } from "../../features/catalog/Catalog";
import { ListingDetail } from "../../features/catalog/ListingDetail";
import { Contact } from "../../features/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ListingDetail /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
