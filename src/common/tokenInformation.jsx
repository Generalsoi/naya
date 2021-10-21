import React from "react";
import "../css/tokeninformation.css";

const TokenInformation = (props) => {
  const { content, heading } = props;
  const tokenInformationStyles = {
    background: "rgba(80, 73, 106, 0.2)",
    borderRadius: "5px",
    position: "relative",
    height: "5.25rem",
  };
  return (
    <div className="tokeninformation">
      <p className="tokeninformationheading">{heading}</p>
      <div className="card text-center" style={tokenInformationStyles}>
        <div className="card-body pt-4 ps-4">
          <p className="tokeninformationcontent">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TokenInformation;
