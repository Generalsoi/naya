import React from "react";
import ImageOne from "../images/image1.png";
import ImageTwo from "../images/image2.png";
import Button from "../common/button";
import "../css/introduction.css";

const Introduction = () => {
  const IntroBtnStyles = {
    fontSize: "1.313rem",
    width: "19.125rem",
    height: "5.125rem",
    borderRadius: "50px",
    marginTop: "4.5rem",
    background: "linear-gradient(264.5deg, #632EA6 28.15%, #7353E5 77.79%)",
    border: "none",
    color: "#fff",
  };
  return (
    <div className="d-flex justify-content-between align-items-center section-one">
      <div>
        <p className="sectionOneFirstP">
          THE OFFICIAL DIGITAL CURRENCY OF RAVEN LIVESTREAM AND AD100
        </p>
        <h4 className="section-one-first-h4">Creativity</h4>
        <h4 className="section-one-second-h4">& Kindness</h4>
        <p className="sectionOneSecondP">
          The digital currency powering the African creator
        </p>
        <p className="sectionOneSecondP">economy and charities.</p>
        <Button content="Buy NAYA" buttonStyles={IntroBtnStyles} />
      </div>
      <img src={ImageOne} />
      <img className="section-one-image-two" src={ImageTwo} />
    </div>
  );
};

export default Introduction;
