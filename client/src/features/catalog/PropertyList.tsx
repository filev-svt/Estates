import { useEffect, useState } from "react";
import { House } from "../../app/models/House";
import { ListingContainer } from "./ListingContainer";
import agent from "../../app/api/agent";
import { Loader } from "../../app/layout/Loader";

export const PropertyList = () => {
  const [listings, setListings] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Houses.list()
      .then((response) => setListings(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Loader /> : <ListingContainer listings={listings} />;
};
