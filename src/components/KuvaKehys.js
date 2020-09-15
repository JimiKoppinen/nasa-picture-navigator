import React, { useState, useEffect } from "react";
import "../additionalStyles.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const renderPhotos = (props, photoArray) => {
  if (!props) {
    return <PacmanLoader />;
  }
  return (
    <div className="row row-img">
      {props.map((image, index) => (
        <div key={index} className="col-md-3 ">
          <figure className="figure">
            <img className="img-fluid" src={image.img_src} alt="Card"></img>
            <figcaption className="figure-caption">
              Kuva {index + 1} / {photoArray.length}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

const KuvaKehys = (props) => {
  const [photosToShow, setPhotosToShow] = useState([]);
  const [count, setCount] = useState(5);

  const photoArray = props.apiResponse.photos;

  useEffect(() => {
    const initialArr = photoArray.slice(0, count);
    setPhotosToShow(initialArr);
  }, [count, photoArray]);

  const handleClick = () => {
    setCount(count + 5);
    const slicedArr = photoArray.slice(0, count);
    setPhotosToShow(slicedArr);
  };

  if (photosToShow.length >= 4) {
    return (
      <>
        {renderPhotos(photosToShow, photoArray)}
        <button onClick={() => handleClick()} className="btn btn-primary mb-2">
          Lataa lisää...
        </button>
      </>
    );
  } else if (photosToShow.length < 4 && photosToShow.length > 0) {
    return renderPhotos(photosToShow, photoArray);
  } else if (!photosToShow) {
    return <div>Ei kuvia, valitse toinen kamera tai päivämäärä</div>;
  } else {
    return <div>Ei kuvia, valitse toinen kamera tai päivämäärä</div>;
  }
};

export default KuvaKehys;
