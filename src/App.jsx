import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../src/pages/NoMatch/NoMatch";
import HomePage from "../src/pages/HomePage/HomePage";
import CreateUser from "../src/components/CreateUser/CreateUser";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NoMatch} />
        </Switch>
        <Route exact path="/signup" component={CreateUser} />
      </div>
    </Router>
  );
};

export default App;
