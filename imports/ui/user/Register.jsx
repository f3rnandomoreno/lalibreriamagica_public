import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
          navigate("/");
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
          navigate("/");
        }
      }
    );
  };

  const handleGoogleLogin = () => {
    Meteor.loginWithGoogle((err) => {
      if (err) {
        alert(`Google login fails`);
      } else {
        navigate("/");
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Dirección de correo"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError && "Por favor introduce un correo válido"}
          InputProps={{
            readOnly: step === "password",
            endAdornment: step === "password" && (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleEditEmail}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {step === "password" && (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handlePasswordToggle}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 1 }}
        >
          Continuar
        </Button>
        <Box
          textAlign="center"
          marginTop={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="body2" color="textPrimary" sx={{ mr: 1 }}>
            ¿Ya tienes cuenta?
          </Typography>
          <Link href="/login" variant="body2">
            Inicia sesión
          </Link>
        </Box>
        {step === "email" && (
          <>
            <Typography
              variant="body1"
              align="center"
              color="textPrimary"
              sx={{ mt: 1 }}
            >
              {" "}
              O
            </Typography>
            <SocialButton
              variant="outlined"
              startIcon={<FacebookIcon />}
              fullWidth
              onClick={handleFacebookLogin}
            >
              Continuar con Facebook
            </SocialButton>
            <SocialButton
              variant="outlined"
              startIcon={<GoogleIcon />}
              fullWidth
              onClick={handleGoogleLogin}
            >
              Continuar con Google
            </SocialButton>
          </>
        )}
      </RegisterForm>
    </StyledContainer>
  );
};

export default Register;
