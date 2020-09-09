import React, { useState } from "react";
import Logo from "../assets/img/logo_second.png";
import "../assets/css/login.css";
import { Grid, TextField, Button } from "@material-ui/core";
import { Email, Lock } from "@material-ui/icons";
import { person } from "../config/login";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = () => {
    if (person.email === email && person.password === password) {
      localStorage.setItem("access_token", person.access_token);
      setRedirect("/");
    } else {
      setError("Login information incorrect !");
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  if (localStorage.getItem("access_token")) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Grid container className="login-header">
        <Grid item xs={12}>
          <img src={Logo} alt="logo" />
        </Grid>
        <Grid item xs={12} className="brand">
          Golden Paddy
        </Grid>
      </Grid>
      <Grid container className="login-content">
        <Grid container>
          <Grid item xs={12} className="login-form-title">
            Login Information
          </Grid>
          <Grid style={{ color: "red", marginLeft: "20px" }}>{error}</Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingRight: "15px" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={2}>
              <Email color="primary" />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="outlined-basic"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingRight: "15px" }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={2}>
              <Lock color="primary" />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", borderRadius: "20px" }}
            onClick={onSubmit}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          Don't have an account? <span style={{ color: "blue" }}>Register</span>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
