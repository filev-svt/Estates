import { House } from "../../app/models/House";
import { ListingContainer } from "./ListingContainer";

interface Props {
  houses: House[];
}

export const Catalog = ({ houses }: Props) => {
  return <ListingContainer listings={houses} />;
};
