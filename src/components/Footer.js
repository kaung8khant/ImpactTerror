import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "../assets/css/weather.css";
import { Home, Menu, RssFeed } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Grid container className="footer">
      <Grid item xs={4}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Home color={pathname === "/" ? "primary" : ""} />
          <div>
            <Typography color={pathname === "/" ? "primary" : ""}>
              Home
            </Typography>
          </div>
        </Link>
      </Grid>
      <Grid item xs={4} className="footer-action">
        <Link
          to="/subscription"
          style={{ textDecoration: "none", color: "black" }}
        >
          <RssFeed color={pathname === "/subscription" ? "primary" : ""} />
          <div>
            <Typography color={pathname === "/subscription" ? "primary" : ""}>
              Home
            </Typography>
          </div>
        </Link>
      </Grid>
      <Grid item xs={4} className="footer-action">
        <Menu />
        <div>
          <Typography>More</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
