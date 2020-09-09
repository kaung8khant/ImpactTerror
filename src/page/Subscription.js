import React from "react";
import Logo from "../assets/img/logo.png";
import "../assets/css/subscription.css";
import { Grid, TextField, Button } from "@material-ui/core";

const Subscription = () => {
  return (
    <>
      <Grid container spacing={1} className="subscribe-header">
        <Grid item xs={5}>
          <img src={Logo} style={{ width: "100px" }} />
        </Grid>
        <Grid item xs={7} className="title-div">
          <span>Golden Paddy</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="subscribe-text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            mauris mauris, consequat non suscipit ac, rhoncus in nisl.
          </span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="subscribe-form-title">
          Login Information
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} style={{ marginTop: "20px", padding: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "20px", padding: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} style={{ padding: "10px", marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", borderRadius: "20px" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Subscription;
