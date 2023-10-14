import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export const HomePage = () => {
  const [validatonErrors, setValidationErrors] = useState<string[]>([]);

  return (
    <Container>
      <Typography gutterBottom variant="h1">
        Errors for testing purposes
      </Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400().catch((error) => console.log(error))
          }
        >
          Test 400 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401().catch((error) => console.log(error))
          }
        >
          Test 401 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404().catch((error) => console.log(error))
          }
        >
          Test 404 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500().catch((error) => console.log(error))
          }
        >
          Test 500 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get422()
              .then(() => console.log("nothing"))
              .catch((error) => setValidationErrors(error))
          }
        >
          Test 422 error
        </Button>
      </ButtonGroup>
      {validatonErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation errors</AlertTitle>
          <List>
            {validatonErrors.map((validationError) => (
              <ListItem key={validationError}>
                <ListItemText>{validationError}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};
