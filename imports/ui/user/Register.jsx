import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { IconButton, InputAdornment } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Link,
} from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import Logo from "../components/commons/Logo";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

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

const RegisterForm = styled("form")({
  width: "100%",
  marginTop: "20px",
});

const SocialButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("email");
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Usa useNavigate

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleEditEmail = () => {
    setStep("email");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    if (step === "password") {
      Accounts.createUser({ email, password }, (err) => {
        if (err) {
          alert(err.reason);
        } else {
          alert("Registration success");
          navigate('/'); // Redirige al usuario
        }
      });
    } else {
      setStep("password");
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleFacebookLogin = () => {
    Meteor.loginWithFacebook(
      { requestPermissions: ["public_profile"] },
      (err) => {
        if (err) {
          alert(`Facebook login fails`);
        } else {
          alert(`Facebook login success`);
        }
      }
    );
  };

  const handleGoogleLogin = () => {
    Meteor.loginWithGoogle((err) => {
      if (err) {
        alert(`Google login fails`);
      } else {
        alert(`Google login success`);
      }
    });
  };

  return (
    <StyledContainer maxWidth="xs">
      <Logo />
      <Typography component="h1" variant="h5" color="textPrimary">
        {step === "email" ? "Registra tu cuenta" : "Registra tu cuenta"}
      </Typography>
      <RegisterForm noValidate onSubmit={handleRegister}>
        {/* Resto del formulario */}
      </RegisterForm>
    </StyledContainer>
  );
};

export default Register;
