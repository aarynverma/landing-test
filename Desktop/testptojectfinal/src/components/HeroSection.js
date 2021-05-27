import React from "react";
import "./Hero.css";
import Button from "./Button";
import cap2 from "../Images/cap2.png";
const HeroSection = () => {
  return (
    <div className="root">
      <div className="box">
        <div className="head1">
          {" "}
          <b>
            Best Outcome For <br />
            Every Patient Every <br />
            Time
          </b>
        </div>
        <p>For the Expected Unexpected Everything in Between.</p>
        <div className="bt">
          <Button title="Contact Us" />
        </div>
      </div>
      <div className="HeroSection">
        <img className="cap2" src={cap2} alt="Image" />
      </div>
    </div>
  );
};

export default HeroSection;
