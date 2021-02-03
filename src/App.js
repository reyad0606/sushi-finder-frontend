import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import LandingPage from "./LandingPage";
import RestaurantsPage from "./Restaurants";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage}>
            <LandingPage />
          </Route>

          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/checkout" component={Checkout}>
            <Header />
            <Checkout />
          </Route>
          <Route path="/cart">
            <Header />
            <Home />
          </Route>
          <Route path="/restaurants">
            <RestaurantsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
