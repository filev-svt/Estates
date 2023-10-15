import { Grid } from "@mui/material";
import { Product } from "../../app/models/Product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export const ProductContainer = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
