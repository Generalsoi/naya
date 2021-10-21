import React from "react";
import "../css/downloadcard.css";

const DownloadCard = (props) => {
  const { cardImg } = props;
  return (
    <div className="card text-center p-5 downloadCard">
      <div className="card-body">
        <img src={cardImg} alt="" />
      </div>
    </div>
  );
};

export default DownloadCard;
