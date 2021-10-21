import React from "react";

const DownloadCard = (props) => {
  const { cardImg } = props;
  const cardStyles = {
    background: "linear-gradient(180deg, #CE4DA4 0%, #9075F7 100%)",
    borderRadius: "20px",
  };
  return (
    <div className="card text-center p-5" style={cardStyles}>
      <div className="card-body">
        <img style={{ width: "80%" }} src={cardImg} alt="" />
      </div>
    </div>
  );
};

export default DownloadCard;
