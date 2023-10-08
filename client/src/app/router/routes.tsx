import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import { HomePage } from "../../features/home/HomePage";
import { PropertyList } from "../../features/catalog/PropertyList";
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
      { path: "properties", element: <PropertyList /> },
      { path: "properties/:propertyId", element: <ListingDetail /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
