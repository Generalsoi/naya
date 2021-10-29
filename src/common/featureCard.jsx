import React from "react";
import "../css/featurecard.css";

const FeatureCard = (props) => {
  const { cardImg, featureTitle, featureDesc } = props;

  return (
    <div className="card text-center pt-5 featurecard">
      <div className="card-body">
        <img src={cardImg} alt="" />
        <h5 className="card-title">{featureTitle}</h5>
        <p className="card-text">{featureDesc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
