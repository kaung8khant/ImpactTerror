import React from "react";
import WeatherWidget from "../components/WeatherWidget";
import { Grid } from "@material-ui/core";
import "../assets/css/home.css";
import Product from "../assets/img/product.jpg";
import { product } from "../config/product";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Grid style={{ justifyContent: "center" }}>
      <Header />
      <Grid
        style={{ padding: "20px", marginTop: "70px", marginBottom: "70px" }}
      >
        <WeatherWidget />
        <Grid
          container
          spacing={2}
          style={{ maxWidth: "100%", margin: "auto", marginTop: "20px" }}
        >
          {product.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Grid className="product">
                  <img src={Product} alt="prouct" className="product-image" />
                  <span className="product-image-text">New</span>
                </Grid>
                <Grid className="product-content">
                  <Grid style={{ fontWeight: "bold" }}>{item.name}</Grid>
                  <Grid className="product-price">{item.price} MMK</Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <WeatherWidget />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Home;
