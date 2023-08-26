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
    padding: ${theme.spacing(3)}px;
  `;

  const IntroText = styled(Typography)`
    font-size: 1.2em;
    margin: ${theme.spacing(2, 0)}px;
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
    max-width: 200px;
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
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item key={book.id}>
            <BookCard>
              <BookCover image={book.cover} title={book.title} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {book.title}
                </Typography>
              </CardContent>
            </BookCard>
          </Grid>
        ))}
      </Grid>
    </AuthenticatedHomeContainer>
  );
};

export default AuthenticatedHome;
