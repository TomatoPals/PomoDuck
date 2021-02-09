import React from "react";
// import Countdown from "./components/Countdown";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../src/pages/NoMatch/NoMatch";
import CreateUser from "../src/components/CreateUser/CreateUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={CreateUser} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

// class App extends Component {

//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/signup" component={CreateUser} />
//           <Route component={NoMatch} />
//         </Switch>
//       </Router>
//     );
//   }
// }

export default App;
