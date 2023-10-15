import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  PaletteMode,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "Galerie", path: "/gallery" },
  {
    title: "Merch",
    path: "/catalog",
  },
  { title: "O mně", path: "/about" },
  {
    title: "Kontakt",
    path: "/contact",
  },
];

const rightLinks = [
  {
    title: "Přihlášení",
    path: "/login",
  },
  {
    title: "Registrace",
    path: "/register",
  },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "grey.400",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  paletteMode: PaletteMode;
  togglePaletteMode: () => void;
}

export const Header = ({ paletteMode, togglePaletteMode }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to={"/"} sx={navStyles}>
            ESTATES
          </Typography>
          <Switch
            checked={paletteMode === "dark"}
            onChange={togglePaletteMode}
          />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ path, title }) => (
            <ListItem key={title} component={NavLink} to={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="medium" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ path, title }) => (
              <ListItem
                key={title}
                component={NavLink}
                to={path}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
