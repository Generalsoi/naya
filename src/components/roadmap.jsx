import React from "react";
import Button from "../common/button";
import "../css/roadmap.css";
import RoadMapCard from "./roadmapCard";

const RoadMap = () => {
  const buttonStyles = {
    background: "linear-gradient(264.5deg, #632EA6 28.15%, #7353E5 77.79%)",
    borderRadius: "50px",
    width: "19.125rem",
    height: "5.125rem",
    color: "#fff",
    fontSize: "1.313rem",
    fontFamily: "Poppins, serif",
  };

  return (
    <div className="roadmap" id="roadmap">
      <h4>Our Roadmap</h4>
      <p className="roadmap-p">
        NAYA Token is a hyper crypto currency and the Binance smartchain. NAYA
        is the official digital currency for
        <span style={{ color: "#8A79FF" }}> Raven Livestream </span>and
        <span style={{ color: "#8A79FF" }}> Ad100.com. </span>
      </p>
      <div className="roadmap-btn">
        <Button
          content="Buy NAYA"
          buttonStyles={buttonStyles}
          onClick={window.open("https://presale.nayatoken.com", "_blank")}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 roadmap-content">
        <div className="col-sm-4">
          <RoadMapCard
            number="1"
            featureTitle="Token & App Development"
            featureDesc="Product Architecture
            | Team Onboarding | ICO website  creation"
          />
        </div>
        <div className="col-sm-4">
          <RoadMapCard
            number="2"
            featureTitle="Whitepaper release & Pre-sale"
            featureDesc="Whitepaper Release, Social Media and Documentation
            | Token pre-sales and ICO. "
          />
        </div>
        <div className="col-sm-4">
          <RoadMapCard
            number="3"
            featureTitle="Launch & Expansion"
            featureDesc="Staking program launch | External audit by Techrate | Cross-chain support for BSC "
          />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
