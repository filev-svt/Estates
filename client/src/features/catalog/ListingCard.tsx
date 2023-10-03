import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { House } from "../../app/models/House";
import { Garage, LocalParking, Pool, Stairs } from "@mui/icons-material";

interface Props {
  listing: House;
}

export const ListingCard = ({ listing }: Props) => {
  const title = listing.roomsCount + "-pokojový dům, " + listing.city;
  const titleShort = title.length > 30 ? title.substring(0, 30) + "..." : title;
  const price = listing.price.toLocaleString("cs-CZ", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: listing.currency,
  });

  return (
    <Card>
      <CardHeader>
        <Typography color={"background.paper"} variant="h6">
          {titleShort}
        </Typography>
      </CardHeader>
      <CardMedia
        sx={{ height: 300, backgroundSize: "cover" }}
        // image={`http://picsum.photos/200/${listing.id}`}
        image="https://www.euroline.cz/img/projects/ObrRD_2020/Bungalov_2073/bu2073.jpg"
        title={title}
      />
      <CardContent>
        <Stack direction={"row"} spacing={1}>
          {listing.hasGarage && <Chip icon={<Garage />} label={"Garáž"} />}
          {listing.hasParking && (
            <Chip icon={<LocalParking />} label={"Parkování"} />
          )}
          {listing.hasPool && <Chip icon={<Pool />} label={"Bazén"} />}
          {listing.hasBasement && <Chip icon={<Stairs />} label={"Sklep"} />}
        </Stack>
      </CardContent>
      <CardContent>
        <Typography gutterBottom component="div">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Přidat k porovnání
        </Button>
        <Button size="small" variant="contained">
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};
