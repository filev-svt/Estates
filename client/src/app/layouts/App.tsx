import { Catalog } from "../../features/catalog/Catalog";
import {
  Container,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Header } from "./Header";
import { useState } from "react";

function App() {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>("light");

  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: { default: paletteMode === "light" ? "#eaeaea" : "#121212" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        paletteMode={paletteMode}
        togglePaletteMode={() => {
          setPaletteMode(paletteMode === "light" ? "dark" : "light");
        }}
      />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
