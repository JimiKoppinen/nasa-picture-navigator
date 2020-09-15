import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import Nasa, { apikey } from "../api/Nasa";
import moment from "moment";

const POD = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [randomDate, setRandomDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

  useEffect(() => {
    getData();
  }, [randomDate]);

  const handleClick = () => {
    const formattedDate = moment(
      new Date(+new Date() - Math.floor(Math.random() * 10000000000))
    ).format("YYYY-MM-DD");
    setRandomDate(formattedDate);
  };

  const getData = async () => {
    setApiResponse(null);
    let response = await Nasa.get(
      `https://api.nasa.gov/planetary/apod?date=${randomDate}&api_key=${apikey}`
    );
    setApiResponse(response.data);
  };

  if (!apiResponse) {
    return <PacmanLoader />;
  } else {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="pt-3 pb-2">{apiResponse.title}</h2>
          <img
            className="mw-100"
            src={apiResponse.url}
            alt={apiResponse.title}
          />
          <div className="lead">
            {moment(apiResponse.date).format("MMMM Do YYYY")}
          </div>
          <div className="pt-3 pb-3">{apiResponse.explanation}</div>
          <button onClick={handleClick} type="button" className="btn btn-light">
            Lataa uusi satunnainen kuva
          </button>
        </div>
      </div>
    );
  }
};

export default POD;
