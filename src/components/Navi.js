import React from "react";
import "../additionalStyles.css";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <div className="topnav">
      <Link to="/" className="active" href="#home">
        <i className="fa fa-home"></i>
      </Link>
      <Link to="/Rover" href="#news">
        Mars Rover -haku
      </Link>
      <Link to="/POD" href="#contact">
        Päivän kuva
      </Link>
    </div>
  );
};

export default Navi;
