import React from "react";
import ImageOne from "../images/image1.png";
import ImageTwo from "../images/image2.png";
import ImageThree from "../images/ellipse2.png";
import ImageFour from "../images/ellipse3.png";
import Button from "../common/button";
import "../css/introduction.css";

const Introduction = () => {
  const IntroBtnStyles = {
    fontSize: "21px",
    width: "258px",
    height: "69.14px",
    borderRadius: "42.1569px",
    marginTop: "45px",
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
        <a href="https://presale.nayatoken.com">
        <Button content="Buy NAYA" buttonStyles={IntroBtnStyles}/>
        </a>
      </div>
      <img
        src={ImageOne}
        alt="sectionOneImageOne"
        className="section-one-image-one"
      />
      <img
        className="section-one-image-two"
        src={ImageTwo}
        alt="sectionOneImageTwo"
      />
      <img
        className="section-one-image-three"
        src={ImageThree}
        alt="sectionOneImageThree"
      />
      <img
        className="section-one-image-four"
        src={ImageFour}
        alt="sectionOneImageFour"
      />
      </div>
  );
};

export default Introduction;
