import React from "react";
import "../App.css";
import "./Steps.css";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import icon5 from "../Images/icon5.png";
const FacilitySection = () => {
  return (
    <div className="fac row m-5 d-flex justify-content-center">
      <div className="col-12 p-5 text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-2 text-center">
            <img src={icon1} alt="Image" />
          </div>
          <div className="col-2 text-center ">
            <img src={icon2} alt="Image" />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-1 text-center d-flex align-items-center">
            <img src={icon3} alt="Image" />
          </div>
          <div className="col-6 text-center p-5">
            <h1 className="p-5">
              We Provide all the best World Class Facilities
            </h1>
          </div>
          <div className="col-1 text-center d-flex align-items-center">
            <img src={icon4} alt="Image" />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-2 text-center">
            <img src={icon5} alt="Image" />
          </div>
          <div className="col-2 text-center">
            <img src={icon2} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySection;
