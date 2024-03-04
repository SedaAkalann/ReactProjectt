import React, { useEffect, useState } from "react";
import "../css/login.css";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  // email:admin@admin.com
  // password:123456 olacak şekilde ayarlandı
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorLength, setErrorLenght] = useState("");

  useEffect(() => {
    console.log(emailValue);
    console.log(passwordValue);
  }, [emailValue, passwordValue]);

  const handleChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value.trim();
    setEmailValue(value);

    if (emailValue.trim() === " ") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };
  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value.trim();
    setPasswordValue(value);
    if (passwordValue.length < 5) {
      setErrorPassword(false);
      setErrorLenght("Şifre en az 6 karakter olmalı");
    } else {
      setErrorLenght("");
    }
  };
  const handleClick = () => {
    if (emailValue === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    if (passwordValue === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    if (emailValue === "admin@admin.com" && passwordValue === "123456") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="logInContainer">
      <img className="logInImg" src="../../public/goggle.jpg" alt="" />

      <form className="logForm">
        <Typography sx={{ fontWeight: "bold", margin: "0 auto" }} variant="h4">
          Giriş Yap
        </Typography>
        <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          Email
        </Typography>

        <TextField
          sx={{ marginBottom: "15px" }}
          type="email"
          label="Email"
          variant="outlined"
          value={emailValue}
          onChange={handleChangeEmail}
          name="email"
        ></TextField>
        {errorEmail && (
          <Typography
            marginBottom="5px"
            fontWeight="bold"
            fontSize="12px"
            color="red"
          >
            Email boş olamaz
          </Typography>
        )}

        <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          Şifre
        </Typography>
        <TextField
          sx={{
            marginBottom: "10px",
          }}
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={passwordValue}
          onChange={handleChangePassword}
        />
        {errorPassword && (
          <Typography
            marginBottom="5px"
            fontWeight="bold"
            fontSize="12px"
            color="red"
          >
            Password boş olamaz
          </Typography>
        )}
        {errorLength && (
          <Typography color="red" fontSize="12px" fontWeight="bold">
            {errorLength}
          </Typography>
        )}
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ padding: "5px 35px", margin: "15px auto" }}
        >
          Giriş
        </Button>
      </form>
    </div>
  );
};
export default LogIn;
