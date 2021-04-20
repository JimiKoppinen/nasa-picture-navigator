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
    return (
      <div className="d-flex justify-content-center">
        <PacmanLoader />
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="column">
          <h2 style={{ marginBottom: "1rem" }} className="ui header">
            {apiResponse.title}
          </h2>
          <img
            style={{ marginBottom: "1rem" }}
            className="ui fluid image"
            src={apiResponse.url}
            alt={apiResponse.title}
          />
          <p className="lead">
            {moment(apiResponse.date).format("MMMM Do YYYY")}
          </p>
          <p className="lead">{apiResponse.explanation}</p>
          <button
            onClick={handleClick}
            type="button"
            className="ui secondary button"
          >
            Lataa uusi satunnainen kuva
          </button>
        </div>
      </div>
    );
  }
};

export default POD;
