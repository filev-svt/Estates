import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ListingDetail = () => {
  const { propertyId } = useParams<{ propertyId: string }>();

  useEffect(() => {}, [propertyId]);

  return <Typography variant="h1">ListingDetail</Typography>;
};
