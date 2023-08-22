import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          La Librería Mágica
        </Typography>
        <InputBase
          placeholder="Buscar…"
          sx={{
            color: "inherit",
            padding: "0 1rem",
            width: "20ch",
            transition: (theme) => theme.transitions.create("width"),
            "&:focus": { width: "30ch" },
          }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Salas de Lectura</Button>
        <Button color="inherit">Perfil</Button>
        <Button color="inherit" variant="outlined">
          Crear Sala
        </Button>
      </Toolbar>
    </AppBar>
  );
}
