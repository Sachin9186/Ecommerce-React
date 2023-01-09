import React from "react";
import { useState, useEffect } from "react";

export default function Slider() {
  var [slider, setSlider] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://parind.online/parind4/public/api/v1/sliders", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(JSON.parse(result));
        var resp = JSON.parse(result);
        // console.log(resp)
        setSlider(resp["data"]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <React.Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          
          {slider.map((e) => (
            <div className="carousel-item active">
              <img
                key={e["image_url"]}
                src={e["image_url"]}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="headingslider">Fresh, fast and delicious</h5>
                <p>
                  At our Restaurant, we offer meals of excellent quality and
                </p>
                <button className=" menu_btn btn btn-danger sliderbtn">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );
}
// export default Slider;
