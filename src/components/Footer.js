import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "../assets/css/weather.css";
import { Home, Menu, ShoppingCart } from "@material-ui/icons";

const Footer = () => {
  return (
    <Grid container className="footer">
      <Grid item xs={4}>
        <Home color="primary" />
        <div>
          <Typography color="primary">Home</Typography>
        </div>
      </Grid>
      <Grid item xs={4} className="footer-action">
        <ShoppingCart />
        <div>
          <Typography>Home</Typography>
        </div>
      </Grid>
      <Grid item xs={4} className="footer-action">
        <Menu />
        <div>
          <Typography>Home</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
