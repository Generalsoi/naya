import React from "react";
import Button from "./button";
import "../css/downloadinfo.css";

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

  return (
    <div className="downloadinfo">
      <h4>{downloadTitle}</h4>
      <p>{downloadbody}</p>
      <Button content="Download" buttonStyles={downloadStyles} />
      <Button content="Learn more" buttonStyles={learnMoreStyles} />
    </div>
  );
};

export default DownloadInfo;
