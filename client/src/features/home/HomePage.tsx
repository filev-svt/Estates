import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export const HomePage = () => {
  return (
    <Container>
      <Typography gutterBottom variant="h1">
        Errors for testing purposes
      </Typography>
      <ButtonGroup>
        <Button variant="contained" onClick={() => agent.TestErrors.get400()}>
          Test 400 error
        </Button>
        <Button variant="contained" onClick={() => agent.TestErrors.get401()}>
          Test 401 error
        </Button>
        <Button variant="contained" onClick={() => agent.TestErrors.get404()}>
          Test 404 error
        </Button>
        <Button variant="contained" onClick={() => agent.TestErrors.get500()}>
          Test 500 error
        </Button>
        <Button variant="contained" onClick={() => agent.TestErrors.get422()}>
          Test 422 error
        </Button>
      </ButtonGroup>
    </Container>
  );
};
