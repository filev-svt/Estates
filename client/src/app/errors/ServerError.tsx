import { Container, Divider, Paper, Typography } from "@mui/material";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

export const ServerError = () => {
  const { state } = useLocation();
  return (
    <Container component={Paper}>
      {state?.error ? (
        <Fragment>
          <Typography gutterBottom variant="h3" color="secondary">
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1">
            {state.error.detail || "Internal server error."}
          </Typography>
        </Fragment>
      ) : (
        <Typography>Server error</Typography>
      )}
    </Container>
  );
};
