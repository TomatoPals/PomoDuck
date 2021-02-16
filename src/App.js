import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../src/pages/NoMatch/NoMatch";
import CreateUser from "../src/components/CreateUser/CreateUser";
import "../src/assets/css/styles.scss";
import StatsPage from "./pages/StatsPage/StatsPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={CreateUser} />
          <Route exact path="/stats" component={StatsPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
