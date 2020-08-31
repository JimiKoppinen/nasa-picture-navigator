import React, { useState, useEffect } from "react";
import Nasa from "../api/Nasa";
import KuvaKehys from "./KuvaKehys";

const apikey = "qP22p8oxWj9yQN5Vr0Ga8yna1YCPfgXSn3QxTpW2";
const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/";

const HakuKentta = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [sol, setSol] = useState(1000);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await Nasa.get(
      `${baseURL}photos?sol=${sol}&camera=fhaz&api_key=${apikey}`
    );
    setApiResponse(response.data);
  };

  const handleChange = (event) => {
    setSol(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  if (!apiResponse) {
    return <div> Loading...</div>;
  } else {
    return (
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Kameran numero:
              <input
                type="number"
                value={sol}
                onChange={handleChange}
                name="sol"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Numero:
              {/* <input
                type="number"
                value={this.state.numeroValue}
                onChange={this.handleChange}
                name="numeroValue"
              /> */}
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <KuvaKehys vastaus={apiResponse} />
      </div>
    );
  }
};

export default HakuKentta;
