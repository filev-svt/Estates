import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { AspectRatio, Bed } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/Product";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.price.toLocaleString("cs-CZ", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "CZK",
  });

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        sx={{ width: 400, height: 300, backgroundSize: "cover" }}
        image={product.image}
        title={product.name}
      />
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Divider sx={{ mt: 2 }} />
          <List component={Stack} direction="row">
            <ListItem>
              <ListItemIcon>
                <AspectRatio />
              </ListItemIcon>
              <ListItemText>{price}</ListItemText>
            </ListItem>
            <Divider orientation="vertical" flexItem />
            <ListItem>
              <ListItemIcon>
                <Bed />
              </ListItemIcon>
              <ListItemText>{product.description}</ListItemText>
            </ListItem>
          </List>
          <Divider sx={{ mb: 2 }} />
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">
            Přidat do košíku
          </Button>
          <Button
            component={Link}
            to={`/catalog/${product.id}`}
            size="small"
            variant="contained"
          >
            Detail
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
