import React from "react";
import "../additionalStyles.css";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <div className="topnav">
      <Link to="/" className="active">
        <i className="fa fa-home"></i>
      </Link>
      <Link to="/Rover">Mars Rover -haku</Link>
      <Link to="/POD">Päivän kuva</Link>
      <Link to="/EPIC">Maan kuvat</Link>
    </div>
  );
};

export default Navi;
