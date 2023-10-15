import { useEffect, useState } from "react";
import { ProductContainer } from "./ProductContainer";
import agent from "../../app/api/agent";
import { Loader } from "../../app/layout/Loader";
import { Product } from "../../app/models/Product";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Products.list()
      .then((response) => setProducts(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Loader /> : <ProductContainer products={products} />;
};
