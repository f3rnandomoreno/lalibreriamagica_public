import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  authenticatedHome: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  introText: {
    fontSize: '1.2em',
    margin: theme.spacing(2, 0),
  },
  actionSection: {
    margin: theme.spacing(3, 0),
  },
  createRoomBtn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  bookCarousel: {
    // Estilos para el carrusel de libros
  },
}));

const AuthenticatedHome = () => {
  const classes = useStyles();

  return (
    <Container className={classes.authenticatedHome}>
      <Typography variant="h4" component="h1">
        Bienvenido a La Librería Mágica 📚✨
      </Typography>
      <Typography className={classes.introText}>
        Descubre un mundo lleno de aventuras, misterios y conocimientos. 
        ¡Invita a tus amigos y compartan juntos la magia de la lectura!
      </Typography>
      <div className={classes.actionSection}>
        <Button className={classes.createRoomBtn}>
          Crear Sala de Lectura
        </Button>
      </div>
      <div className={classes.bookCarousel}>
        {/* Aquí puedes agregar un carrusel de portadas de libros al estilo Netflix */}
      </div>
    </Container>
  );
};

export default AuthenticatedHome;
