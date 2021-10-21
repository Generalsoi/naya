import React from "react";
import "../css/tokendistribution.css";

const TokenDistribution = (props) => {
  const { content } = props;

  return (
    <div className="card text-center tokendistribution">
      <div className="card-body">
        <p>{content}</p>
        {/* <div
          style={{
            width: "22px",
            height: "5px",
            position: "absolute",
            backgound: "#C652AE",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default TokenDistribution;
