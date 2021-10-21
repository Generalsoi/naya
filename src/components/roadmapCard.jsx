import React from "react";
import "../css/roadmapcard.css";

const RoadMapCard = (props) => {
  const { number, featureTitle, featureDesc } = props;

  return (
    <div className="card text-center pt-5 roadmap-card">
      <div className="card-body">
        <div className="number">{number}</div>
        <h5 className="card-title">{featureTitle}</h5>
        <p className="card-text">{featureDesc}</p>
      </div>
    </div>
  );
};

export default RoadMapCard;
