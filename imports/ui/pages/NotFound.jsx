import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../components/commons/Logo";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "90vh",
  padding: theme.spacing(2),
  backgroundColor: "#f0f0f0",
  color: "#fff",
}));

const NotFound = () => {
  return (
    <StyledContainer maxWidth="xs">
      <Logo />
      <Typography component="h1" variant="h5" color="textPrimary">
        Página no encontrada
      </Typography>
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textPrimary">
          Lo sentimos, la página que estás buscando no existe.
        </Typography>
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="primary" href="/">
          Volver a inicio
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default NotFound;
