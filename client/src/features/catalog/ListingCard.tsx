import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { House } from "../../app/models/House";

interface Props {
  listing: House;
}

export const ListingCard = ({ listing }: Props) => {
  return (
    <ListItem key={listing.id}>
      <ListItemAvatar>
        <Avatar src={""} />
      </ListItemAvatar>
      <ListItemText>
        {"Dům " + listing.roomsCount + "-pokojový, " + listing.city}
      </ListItemText>
    </ListItem>
  );
};
