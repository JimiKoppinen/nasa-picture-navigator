import React from "react";
import HakuKentta from "./HakuKentta";
import Nasa from "../api/Nasa";
import KuvaKehys from "../components/KuvaKehys";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <HakuKentta />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
