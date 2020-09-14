import React from "react";
import HakuKentta from "./HakuKentta";
import POD from "./POD";
import Navi from "./Navi";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container-lg cool-background">
        <Router>
          <Navi />
          <Switch>
            <Route path="/Rover">
              <HakuKentta />
            </Route>
            <Route path="/POD">
              <POD />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
