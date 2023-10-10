import { useEffect, useState } from "react";
import { House } from "../../app/models/House";
import { ListingContainer } from "./ListingContainer";
import agent from "../../app/api/agent";

export const PropertyList = () => {
  const [listings, setListings] = useState<House[]>([]);

  useEffect(() => {
    agent.Houses.list().then((response) => setListings(response));
  }, []);

  return <ListingContainer listings={listings} />;
};
