import React from "react";
import {
  Button,
  Container,
  Typography,
  useTheme,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";

import NetflixCarousel from "../components/NetflixCarousel";
// Dummy data for Netflix-style carousel
const carouselBooks = [
  { id: 1, title: "Harry Potter", cover: "https://via.placeholder.com/150" },
  {
    id: 2,
    title: "El Señor de los Anillos",
    cover: "https://via.placeholder.com/150",
  },
  { id: 3, title: "La Odisea", cover: "https://via.placeholder.com/150" },
  { id: 4, title: "La Iliada", cover: "https://via.placeholder.com/150" },
  { id: 5, title: "Don Quijote", cover: "https://via.placeholder.com/150" },
  { id: 6, title: "Divergente", cover: "https://via.placeholder.com/150" },
  {
    id: 7,
    title: "Charlie y la Fabrica de Chocolate",
    cover: "https://via.placeholder.com/150",
  },
  // ... more books for the carousel
  // TODO: Insert Netflix-style carousel here
];
const books = [
  { id: 1, title: "Harry Potter", cover: "https://via.placeholder.com/150" },
  {
    id: 2,
    title: "El Señor de los Anillos",
    cover: "https://via.placeholder.com/150",
  },
  { id: 3, title: "1984", cover: "https://via.placeholder.com/150" },
  // ... más libros
];

const AuthenticatedHome = () => {
  const theme = useTheme();

  const AuthenticatedHomeContainer = styled(Container)`
    text-align: center;
    padding: ${theme.spacing(4)}px;
    background-color: ${theme.palette.background.paper};
    border-radius: ${theme.shape.borderRadius}px;
  `;

  const IntroText = styled(Typography)`
    font-size: 1.4em;
    margin: ${theme.spacing(3, 0)}px;
    color: ${theme.palette.text.primary};
  `;

  const ActionSection = styled("div")`
    margin: ${theme.spacing(3, 0)}px;
  `;

  const CreateRoomBtn = styled(Button)`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    padding: ${theme.spacing(1, 2)}px;
    border-radius: ${theme.shape.borderRadius}px;
    &:hover {
      background-color: ${theme.palette.primary.dark};
    }
  `;

  const BookCard = styled(Card)`
    max-width: 220px;
    box-shadow: ${theme.shadows[5]};
  `;

  const BookCover = styled(CardMedia)`
    height: 300px;
  `;

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
      <NetflixCarousel />
    </AuthenticatedHomeContainer>
  );
};

export default AuthenticatedHome;
