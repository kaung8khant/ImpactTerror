import React from "react";
import { Grid, TextField, Button, Card, Chip } from "@material-ui/core";
import Cloudy from "../assets/img/cloudy.png";
import "../assets/css/weather.css";
import { Navigation } from "@material-ui/icons";

const WeatherWidget = () => {
  return (
    <Card className="weather-widget">
      <Grid container>
        <Grid item xs={3}>
          <img src={Cloudy} alt="logo" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={9}>
          <Grid container style={{ padding: "10px", textAlign: "center" }}>
            <Grid item xs={6}>
              <Grid style={{ fontSize: "13px" }}>Mostly Cloudy</Grid>
              <Grid style={{ fontSize: "30px", marginTop: "10px" }}>22° C</Grid>
            </Grid>
            <Grid item xs={6} style={{ position: "relative" }}>
              <Chip
                color="primary"
                icon={<Navigation style={{ fontSize: "15px" }} />}
                label="Yangon"
                style={{ position: "absolute", bottom: "0", right: "-10px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeatherWidget;
