import React from "react";
import "../css/presaleprogress.css";
import Bar from "../images/bar.png";
import PreSalePricingBar from "./preSalePricingBar";

const PreSaleProgress = () => {
  return (
    <div className="pre-sale-progress-section">
      <h3>Pre-Sale Progress</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>Amount Raised</h5>
          <p>10,000 NAYA</p>
        </div>
        <div>
          <h5>Total Token</h5>
          <p>10,000,000 NAYA</p>
        </div>
      </div>
      <img src={Bar} alt="bar" />
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p>SOFT CAP</p>
          <p>100,000 NAYA</p>
        </div>
        <div>
          <p>HARD CAP</p>
          <p>2,000,000 NAYA</p>
        </div>
      </div>
      <PreSalePricingBar />
    </div>
  );
};

export default PreSaleProgress;
