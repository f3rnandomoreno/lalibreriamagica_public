import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const AuthenticatedHomeContainer = styled(Container)`
  text-align: center;
  padding: ${(props) => props.theme.spacing(3)}px;
`;

const IntroText = styled(Typography)`
  font-size: 1.2em;
  margin: ${(props) => props.theme.spacing(2, 0)}px;
`;

const ActionSection = styled("div")`
  margin: ${(props) => props.theme.spacing(3, 0)}px;
`;

const CreateRoomBtn = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.common.white};
  padding: ${(props) => props.theme.spacing(1, 2)}px;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

const AuthenticatedHome = () => {
  return (
    <AuthenticatedHomeContainer>
      <Typography variant="h4" component="h1">
        Bienvenido a La Librería Mágica 📚✨
      </Typography>
      <IntroText>
        Descubre un mundo lleno de aventuras, misterios y conocimientos. ¡Invita
        a tus amigos y compartan juntos la magia de la lectura!
      </IntroText>
      <ActionSection>
        <CreateRoomBtn>Crear Sala de Lectura</CreateRoomBtn>
      </ActionSection>
      <div>
        {/* Aquí puedes agregar un carrusel de portadas de libros al estilo Netflix */}
      </div>
    </AuthenticatedHomeContainer>
  );
};

export default AuthenticatedHome;
