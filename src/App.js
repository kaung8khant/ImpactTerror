import React from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Subscription from "./page/Subscription";
import Home from "./page/Home";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Login from "./page/Login";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#A9F445",
      main: "#7CB92A",
      dark: "#6D9D2D",
      contrastText: "#fff",
    },
  },
});

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("access_token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/subscription" component={Subscription} />
              <ProtectedRoute path="/" component={Home} />
            </Switch>
          </ThemeProvider>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
