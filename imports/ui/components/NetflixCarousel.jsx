import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const NetflixCarousel = () => {
  // Dummy data for Netflix-style carousel
  const books = [
    { title: "Harry Potter", image: "https://example.com/harry-potter.jpg" },
    {
      title: "Lord of the Rings",
      image: "https://example.com/lord-of-the-rings.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      image: "https://example.com/to-kill-a-mockingbird.jpg",
    },
    { title: "1984", image: "https://example.com/1984.jpg" },
    {
      title: "Pride and Prejudice",
      image: "https://example.com/pride-and-prejudice.jpg",
    },
    {
      title: "The Great Gatsby",
      image: "https://example.com/the-great-gatsby.jpg",
    },
    { title: "Moby Dick", image: "https://example.com/moby-dick.jpg" },
    {
      title: "The Catcher in the Rye",
      image: "https://example.com/the-catcher-in-the-rye.jpg",
    },
    {
      title: "Brave New World",
      image: "https://example.com/brave-new-world.jpg",
    },
    { title: "Animal Farm", image: "https://example.com/animal-farm.jpg" },
  ];

  return (
    <div className="netflix-carousel">
      {books.map((book, index) => (
        <Card key={index} className="netflix-card">
          <CardMedia
            component="img"
            alt={book.title}
            height="140"
            image={book.image}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {book.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NetflixCarousel;
