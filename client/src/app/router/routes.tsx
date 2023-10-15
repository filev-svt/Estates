import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { HomePage } from "../../features/home/HomePage";
import { Catalog } from "../../features/catalog/Catalog";
import { ProductDetail } from "../../features/catalog/ProductDetail";
import { Contact } from "../../features/contact/Contact";
import { ServerError } from "../errors/ServerError";
import { NotFound } from "../errors/NotFound";
import { About } from "../../features/about/About";
import { Gallery } from "../../features/gallery/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      { path: "gallery", element: <Gallery /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:productId", element: <ProductDetail /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
