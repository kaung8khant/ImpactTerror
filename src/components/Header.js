import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "../assets/css/weather.css";
import { ChatBubble, ExitToApp } from "@material-ui/icons";
import { Redirect } from "react-router-dom";

const Header = () => {
  const [redirect, setRedirect] = useState(null);
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <Grid container className="header">
      <Grid item xs={4}>
        <span>Myo Htut</span>
      </Grid>
      <Grid item xs={8} className="header-action">
        <Grid xs={3}>
          <ChatBubble />
        </Grid>
        <Grid xs={3}>
          <ExitToApp
            onClick={() => {
              localStorage.removeItem("access_token");
              setRedirect("/login");
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
