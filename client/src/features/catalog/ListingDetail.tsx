import {
  Divider,
  Grid,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { House } from "../../app/models/House";

export const ListingDetail = () => {
  const { propertyId } = useParams<{ propertyId: string }>();

  const [property, setProperty] = useState<House>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:5155/api/houses/${propertyId}`)
      .then(({ data }) => {
        setProperty(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [propertyId]);

  if (loading) {
    return <Skeleton />;
  }

  if (!property) {
    return <h3>Property not found</h3>;
  }

  const title = property.roomsCount + "-pokojový dům, " + property.city;

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img
          src="https://www.euroline.cz/img/projects/ObrRD_2020/Bungalov_2073/bu2073.jpg"
          alt={title}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{title}</Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="h4" color="secondary">
          {property.price.toLocaleString("cs-CZ", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: property.currency,
          })}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="body1">{property.description}</Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Město</TableCell>
                <TableCell>{property.city}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Adresa</TableCell>
                <TableCell>
                  {property.street + " " + property.streetNumber}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vnitřní plocha</TableCell>
                <TableCell>
                  {property.floorArea} m<sup>2</sup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Užitná plocha</TableCell>
                <TableCell>
                  {property.internalArea} m<sup>2</sup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Plocha pozemku</TableCell>
                <TableCell>
                  {property.landArea} m<sup>2</sup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Počet pokojů</TableCell>
                <TableCell>{property.roomsCount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Počet koupelen</TableCell>
                <TableCell>{property.bathroomsCount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>EPC kategorie</TableCell>
                <TableCell>{property.epcRating}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
