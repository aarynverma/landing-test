import React from "react";
import "../App.css";
import "./Steps.css";
import doctor1 from "../Images/doctor1.jpeg";
import doctor2 from "../Images/doctor2.jpeg";

const DoctorSection = () => {
  return (
    <div className="dmain my-5">
      <div className="row d-flex justify-content-center my-5 py-5">
        <div className="col-4">
          <img
            src={doctor2}
            className="img-fluid mx-auto doctor-img"
            alt="Image"
          />
        </div>
        <div className="col-4">
          <img
            src={doctor1}
            className="img-fluid mx-auto doctor-img"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
