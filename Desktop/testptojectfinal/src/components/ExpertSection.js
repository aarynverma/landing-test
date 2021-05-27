import React from "react";
import "../App.css";
import "./Steps.css";
import Button from "./Button";
import lab from "../Images/lab.jpeg";

const ExpertSection = () => {
  return (
    <div className="row root1 justify-content-center my-5">
      <div className="col-6 text-left r1">
        <h1 className="expert-heading">
          Our Experts are <br />
          Ready to Answer
        </h1>
        <button className="mt-4 contact-us-btn">Contact us</button>
      </div>
      <div className="col-3 d-flex align-items-center ">
        <p>
          <b>
            Get an Expert Medical Opinion from one of our world-renowned
            specialists so you can have the answers and confidence to make
            informed decisions about your health. Get an Expert Medical Opinion
            from one of our world-renowned specialists so you can have the
            answers and confidence to make informed decisions about your health.
          </b>
        </p>
      </div>
      <div className="ExpertSection mb-5">
        <div className="lab">
          <img src={lab} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
