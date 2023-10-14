import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        Sorry - not found! :(
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to="/properties">
        Back to listings
      </Button>
    </Container>
  );
};
