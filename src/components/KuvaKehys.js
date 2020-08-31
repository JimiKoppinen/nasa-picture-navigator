import React from "react";

class KuvaKehys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vastaus: "",
    };
  }

  componentDidMount() {
    console.log(this.props.vastaus);
  }
  componentDidUpdate() {
    console.log(this.props.vastaus);
  }

  render() {
    if (!this.props.vastaus) {
      return <div>Loading...</div>;
    } else if (this.props.vastaus.photos.length === 0) {
      return (
        <div>
          Kuvaa ei löytynyt :(
          <button onClick={() => window.location.reload()}>Takaisin </button>
        </div>
      );
    } else {
      return (
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.vastaus.photos[0].img_src}
            alt="Card"
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              {this.props.vastaus.photos[0].camera.full_name}
            </h5>
            <p className="card-text"></p>
            <a href="www.google.fi" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      );
    }
  }
}

export default KuvaKehys;
