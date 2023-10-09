import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { House } from "../../app/models/House";
import {
  AspectRatio,
  Bathroom,
  Bed,
  EnergySavingsLeaf,
  Garage,
  LocalParking,
  Pool,
  Stairs,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Props {
  listing: House;
}

export const ListingCard = ({ listing }: Props) => {
  const title = listing.roomsCount + "-pokojový dům, " + listing.city;
  const titleShort =
    title.length > 100 ? title.substring(0, 30) + "..." : title;
  const price = listing.price.toLocaleString("cs-CZ", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: listing.currency,
  });

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        sx={{ width: 400, height: 300, backgroundSize: "cover" }}
        // image={`http://picsum.photos/200/${listing.id}`}
        image="https://www.euroline.cz/img/projects/ObrRD_2020/Bungalov_2073/bu2073.jpg"
        title={title}
      />
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5">{titleShort}</Typography>
          <Divider sx={{ mt: 2 }} />
          <List component={Stack} direction="row">
            <ListItem>
              <ListItemIcon>
                <AspectRatio />
              </ListItemIcon>
              <ListItemText>{listing.floorArea + " m²"}</ListItemText>
            </ListItem>
            <Divider orientation="vertical" flexItem />
            <ListItem>
              <ListItemIcon>
                <Bed />
              </ListItemIcon>
              <ListItemText>{listing.roomsCount + " pokoje"}</ListItemText>
            </ListItem>
            <Divider orientation="vertical" flexItem />
            <ListItem>
              <ListItemIcon>
                <Bathroom />
              </ListItemIcon>
              <ListItemText>
                {listing.bathroomsCount + " koupelny"}
              </ListItemText>
            </ListItem>
            <Divider orientation="vertical" flexItem />
            <ListItem>
              <ListItemIcon>
                <EnergySavingsLeaf />
              </ListItemIcon>
              <ListItemText>{listing.epcRating}</ListItemText>
            </ListItem>
          </List>
          <Divider sx={{ mb: 2 }} />
          <Stack direction={"row"} spacing={1}>
            {listing.garageSpacesCount > 0 && (
              <Chip icon={<Garage />} label={"Garáž"} />
            )}
            {listing.parkingSpacesCount > 0 && (
              <Chip icon={<LocalParking />} label={"Parkování"} />
            )}
            {listing.hasPool && <Chip icon={<Pool />} label={"Bazén"} />}
            {listing.hasBasement && <Chip icon={<Stairs />} label={"Sklep"} />}
          </Stack>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">
            Přidat k porovnání
          </Button>
          <Button
            component={Link}
            to={`/properties/${listing.id}`}
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
