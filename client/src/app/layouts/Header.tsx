import {
  AppBar,
  PaletteMode,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  paletteMode: PaletteMode;
  togglePaletteMode: () => void;
}

export const Header = ({ paletteMode, togglePaletteMode }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Estates</Typography>
        <Switch checked={paletteMode === "dark"} onChange={togglePaletteMode} />
      </Toolbar>
    </AppBar>
  );
};
