import { Grid } from "@mui/material";
import { House } from "../../app/models/House";
import { ListingCard } from "./ListingCard";

interface Props {
  listings: House[];
}

export const ListingContainer = ({ listings }: Props) => {
  return (
    <Grid container spacing={4}>
      {listings.map((listing) => (
        <Grid key={listing.id} item xs={12}>
          <ListingCard listing={listing} />
        </Grid>
      ))}
    </Grid>
  );
};
