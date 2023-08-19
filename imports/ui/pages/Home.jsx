import React from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "20px",
});

const Image = styled("img")(({ theme }) => ({
  width: "60%",
  maxWidth: "600px",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
}));

const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "10px",
  width: "80%",
  [theme.breakpoints.up("md")]: {
    width: "auto",
  },
}));

const Home = () => {
  const theme = useTheme();
  const history = useHistory();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <ImageContainer>
        <Image src="/images/magic_book_home.jpg" alt="Libro mágico" />
      </ImageContainer>

      <ContentContainer>
        <Typography variant="h4" component="div" align="center">
          ¡Bienvenido a la Librería Mágica!
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <StyledButton
            variant="contained"
            onClick={() => {
              /* Redireccionar a login */
              history.push("/login");
            }}
          >
            Iniciar sesión
          </StyledButton>

          <StyledButton
            variant="contained"
            onClick={() => {
              /* Redireccionar a sign up */
              history.push("/register");
            }}
          >
            Regístrate
          </StyledButton>
        </Box>
      </ContentContainer>
    </Container>
  );
};

export default Home;
