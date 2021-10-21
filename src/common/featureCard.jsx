import React from "react";

const FeatureCard = (props) => {
  const { cardImg, featureTitle, featureDesc, cardStyles } = props;
  const pStyles = {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Poppins, sans-serif",
    color: "rgba(255, 255, 255, 0.5)",
  };
  const h5Styles = {
    fontSize: "1.75rem",
    fontWeight: "500",
    fontFamily: "Helvetica",
    margin: "15px 0",
    color: "#fff",
  };

  return (
    <div className="card text-center pt-5" style={cardStyles}>
      <div className="card-body">
        <img src={cardImg} alt="" />
        <h5 style={h5Styles} className="card-title">
          {featureTitle}
        </h5>
        <p className="card-text" style={pStyles}>
          {featureDesc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
