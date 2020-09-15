import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import Nasa, { apikey } from "../api/Nasa";

const Epic = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setApiResponse(null);
    let response = await Nasa.get(
      `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apikey}`
    );
    setApiResponse(response.data);
  };

  if (!apiResponse) {
    return <PacmanLoader />;
  } else {
    return (
      <ul>
        {apiResponse.map((row) => {
          return (
            <div key={row.identifier}>
              <li>{row.caption}</li>
              <li>{row.date}</li>
            </div>
          );
        })}
      </ul>
    );
  }
};
export default Epic;
