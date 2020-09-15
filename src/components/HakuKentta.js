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
        <p className="lead">
          Tästä voit tehdä hakuja Nasan tietokannasta valitsemalla päivämärään
          sekä kameratyypin
        </p>

        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group pt-4">
                <label>Päivämäärä</label>

                <input
                  className="form-control"
                  type="date"
                  value={date}
                  onChange={onChangeDate}
                  name="date"
                />
              </div>

              <div className="form-group">
                <label>Kameran tyyppi</label>
                <select
                  className="form-control"
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
            </form>
            <br />
          </div>
        </div>
        <KuvaKehys apiResponse={apiResponse} />
      </>
    );
  }
};

export default HakuKentta;
