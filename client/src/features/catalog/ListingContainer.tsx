import { List } from "@mui/material";
import { House } from "../../app/models/House";
import { ListingCard } from "./ListingCard";

interface Props {
  listings: House[];
}

export const ListingContainer = ({ listings }: Props) => {
  return (
    <List>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </List>
  );
};
