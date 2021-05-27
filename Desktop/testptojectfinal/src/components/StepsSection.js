import React from "react";
//import "../App.css";
import "./Steps.css";

import neweasy from "../Images/neweasy.jpeg";
import easy2 from "../Images/easy2.jpeg";
import easy3 from "../Images/easy3.jpeg";
const StepsSection = () => {
  return (
    <div className="main my-5">
      <div className="row">
        <div className="col-12">
          <h1 className="h1 text-center">Easy Steps</h1>
          <div className=" text-left justify-content-right">
            <div className="row para">
              <div className="col-3 text-left">
                <p className="text-left">
                  <b>
                    Our utmost priority is to ensure safety and well being of
                    our patients. To avoid adverse health conditions later, with
                    online video/tele consultations for people.
                  </b>
                </p>
              </div>
              <div className="col-3 text-left">
                <p>
                  <b className="text-left">
                    At this time, it is even more essential to get an experts{" "}
                    consultation to keep ourselves healthy. Taking precautions
                    is always the right choice not only for
                  </b>
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="StepsSection my-5">
          <div className="row justify-content-center">
            <div className="col-3 m-2 easy-img-card">
              <img className="img-fluid mx-auto" src={easy3} alt="Image" />
            </div>
            <div className="col-3 m-2 mt-5 easy-img-card">
              <img className="img-fluid mx-auto" src={easy2} alt="Image" />
            </div>
            <div className="col-3 m-2 mt-5 easy-img-card">
              <img
                className="img-fluid mx-auto mt-5"
                src={neweasy}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
