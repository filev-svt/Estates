import {
  Container,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Header } from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="top-left" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header
        paletteMode={paletteMode}
        togglePaletteMode={() => {
          setPaletteMode(paletteMode === "light" ? "dark" : "light");
        }}
      />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
