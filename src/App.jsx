import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../src/pages/NoMatch/NoMatch";
import HomePage from "../src/pages/HomePage/HomePage";
import Login from "../src/components/Login/Login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NoMatch} />
        </Switch>
        <Route exact path="/Login" component={Login} />
      </div>
    </Router>
  );
};

export default App;
