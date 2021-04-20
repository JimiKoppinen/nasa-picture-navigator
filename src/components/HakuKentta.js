import React, { useState, useEffect } from "react";
import Nasa, { apikey, baseURL } from "../api/Nasa";
import KuvaKehys from "./KuvaKehys";

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
      `${baseURL}photos?earth_date=${date}&camera=${cameraType}&api_key=${apikey}`
    );
    setApiResponse(response.data);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeCameraType = (event) => {
    setCameraType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  if (!apiResponse) {
    return <div> Loading....</div>;
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
              <div className="form-group">
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
                <label>
                  Kameran tyyppi
                  <i
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Valitse neljästä kamerasta sopiva"
                    className="fa fa-question-circle"
                  ></i>
                </label>
                <select
                  className="form-control"
                  onChange={onChangeCameraType}
                  id="cameraType"
                  name="cameraType"
                >
                  <option value="FHAZ"> Front Hazard Avoidance Camera</option>
                  <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                  <option value="MAST">Mast Camera</option>
                  <option value="NAVCAM">Navigation Camera</option>
                </select>
              </div>
              <input
                className="btn btn-primary mb-2"
                type="Submit"
                defaultValue="Vaihda"
              />
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
