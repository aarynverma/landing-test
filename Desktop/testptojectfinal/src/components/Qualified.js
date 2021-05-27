import React from "react";
import "../App.css";
import Button from "./Button";
import qualified1 from "../Images/qualified1.jpeg";
import qualified2 from "../Images/qualified2.jpeg";
import qualified3 from "../Images/qualified3.jpeg";
import capsu1 from "../Images/capsu1.jpeg";
import capsu2 from "../Images/capsu2.jpeg";
import capsu3 from "../Images/capsu3.jpeg";
const Qualified = () => {
  return (
    <div className="main2">
      <div className="row d-flex justify-content-center my-5">
        <div className="col-3">
          <h1>Our High Qualified Facilities</h1>
          <h2>Best Qualifying Medicines</h2>
          <p>
            Taking medicines may feel like a hassle sometimes. But medicines are
            the most effective treatments available for many illnesses. If you
            ever have any questions about what a medicine does or how you should
            take it, talk with your doctor or a pharmacist.
          </p>
        </div>
        <div className="col-7 d-flex justify-content-center mb-5 ">
          <img src={capsu1} alt="Image" className="qualified-img" />
          <img src={capsu2} alt="Image" className="qualified-img" />
          <img src={capsu3} alt="Image" className="qualified-img" />
        </div>
      </div>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-7 d-flex justify-content-center">
          <img src={qualified1} alt="Image" className="qualified-img" />
          <img src={qualified2} alt="Image" className="qualified-img" />
          <img src={qualified3} alt="Image" className="qualified-img" />
        </div>
        <div className="col-3">
          <h2>Best Qualifying Hospitals</h2>
          <p>
            Hospital is a kind of institution which deals with health care
            activities. It is an institution that provides treatment to patients
            with specialized staff and equipment. It serves humanity as a whole.
            Patients suffering from any kind of diseases or patients of any
            sexes, of any age are been treated in general hospitals. On the
            other hand, specialized hospitals limit their services to a specific
            health condition such as orthopedics, oncology, maternity, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualified;
