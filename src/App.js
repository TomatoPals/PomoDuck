import React, { useState } from "react";
// import Countdown from "./components/Countdown";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../src/pages/NoMatch/NoMatch";
import CreateUser from "../src/components/CreateUser/CreateUser";

function App() {
  // handle logged in status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn((prev) => !prev);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} callback={handleLogin} isLoggedin={isLoggedIn} />}
        />
        <Route exact path="/signup" component={CreateUser} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
