import React, { useState, useEffect } from "react";
import Nasa, { apikey, baseURLCuriosity } from "../api/Nasa";
import KuvaKehys from "./KuvaKehys";
import PacmanLoader from "react-spinners/PacmanLoader";

const HakuKentta = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [date, setDate] = useState("2020-06-11");
  const [cameraType, setCameraType] = useState("FHAZ");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setApiResponse(null);
    let response = await Nasa.get(
      `${baseURLCuriosity}photos?earth_date=${date}&camera=${cameraType}&api_key=${apikey}`
    );
    setApiResponse(response.data);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
    getData();
  };

  const onChangeCameraType = (event) => {
    setCameraType(event.target.value);
    getData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  if (!apiResponse) {
    return <PacmanLoader />;
  } else {
    return (
      <>
        <h1 className="pt-3">Mars Rover -kuvahaku</h1>
        <p style={{ fontSize: "15px" }}>
          Tästä voit tehdä hakuja Nasan tietokannasta valitsemalla päivämärään
          sekä kameratyypin.
        </p>

        <form className="ui form" onSubmit={handleSubmit}>
          <h4 class="ui dividing header">Haku:</h4>
          <div className="two fields">
            <div className="field">
              <label>Päivämäärä</label>

              <input
                type="date"
                value={date}
                onChange={onChangeDate}
                name="date"
              />
            </div>

            <div className="field">
              <label>Kameran tyyppi</label>
              <select
                onChange={onChangeCameraType}
                id="cameraType"
                name="cameraType"
                value={cameraType}
              >
                <option value="FHAZ"> Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="MAST">Mast Camera</option>
                <option value="NAVCAM">Navigation Camera</option>
              </select>
            </div>
          </div>
        </form>
        <KuvaKehys apiResponse={apiResponse} />
      </>
    );
  }
};

export default HakuKentta;
