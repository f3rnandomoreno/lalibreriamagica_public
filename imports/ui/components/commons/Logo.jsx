import React from "react";
import { styled } from "@mui/system";

const LogoImg = styled("img")({
  width: "150px",
  height: "150px",
  objectFit: "contain",
  marginBottom: "20px",
});

const Logo = () => (
  <LogoImg src="/images/magic_book_home.jpg" alt="Librería Mágica" />
);

export default Logo;
