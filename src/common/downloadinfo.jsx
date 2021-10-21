import React from "react";
import Button from "./button";

const DownloadInfo = (props) => {
  const { downloadTitle, downloadbody } = props;
  const downloadStyles = {
    background: "linear-gradient(264.5deg, #632EA6 28.15%, #7353E5 77.79%)",
    color: "#fff",
    width: "19.125rem",
    height: "5.125rem",
    borderRadius: "50px",
    fontSize: "1.313rem",
    fontWeight: "500",
    marginRight: "2rem",
  };

  const learnMoreStyles = {
    width: "19.125rem",
    height: "5.125rem",
    borderRadius: "50px",
    color: "#fff",
    fontSize: "1.313rem",
    fontWeight: "500",
    border: "1px solid #7353E5",
  };

  const downloadTitleStyles = {
    fontSize: "1.75rem",
    fontWeight: "500",
    fontFamily: "Helvetica",
    letterSpacing: "0.2rem",
  };

  const downloadBodyStyles = {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Poppins, sans-serif",
    opacity: "50%",
    margin: "1rem 0 3rem",
  };

  return (
    <div>
      <h4 style={downloadTitleStyles}>{downloadTitle}</h4>
      <p style={downloadBodyStyles}>{downloadbody}</p>
      <Button content="Download" buttonStyles={downloadStyles} />
      <Button content="Learn more" buttonStyles={learnMoreStyles} />
    </div>
  );
};

export default DownloadInfo;
