import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { HomePage } from "../../features/home/HomePage";
import { PropertyList } from "../../features/catalog/PropertyList";
import { ListingDetail } from "../../features/catalog/ListingDetail";
import { Contact } from "../../features/contact/Contact";
import { ServerError } from "../errors/ServerError";
import { NotFound } from "../errors/NotFound";

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
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
