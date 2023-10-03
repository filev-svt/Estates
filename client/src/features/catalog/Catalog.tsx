import { useEffect, useState } from "react";
import { House } from "../../app/models/House";
import { ListingContainer } from "./ListingContainer";

export const Catalog = () => {
  const [listings, setListings] = useState<House[]>([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/houses")
      .then((res) => res.json())
      .then((data: House[]) => setListings(data));
  }, []);

  return <ListingContainer listings={listings} />;
};
