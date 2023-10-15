import { Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../app/api/agent";
import { NotFound } from "../../app/errors/NotFound";
import { Loader } from "../../app/layout/Loader";
import { Product } from "../../app/models/Product";

export const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    productId &&
      agent.Products.details(parseInt(productId))
        .then((response) => setProduct(response))
        .catch((error) => {
          alert(error);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img src={product.image} alt={product.name} style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="h4" color="secondary">
          {product.price.toLocaleString("cs-CZ", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "CZK",
          })}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="body1">{product.description}</Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
      </Grid>
    </Grid>
  );
};
