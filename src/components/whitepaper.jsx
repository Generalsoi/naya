import React from "react";
import Button from "../common/button";
import LogoImage from "../images/logoimage.png";
import "../css/whitepaper.css";

const WhitePaper = () => {
  const buttonStyles = {
    width: "10.813rem",
    height: "4.875rem",
    background: "#261E35",
    color: "#fff",
    borderRadius: "50px",
    fontSize: "1.416rem",
    fontWeight: "600",
    fontFamily: "Poppins",
    border: "1px solid #7353E5",
    marginTop: "4rem",
  };
  return (
    <div className="whitepaper">
      <h4>Whitepaper</h4>
      <div className="whitepaper-bar">
        <div className="d-lg-flex flex-row justify-content-between align-items-center">
          <div className="p-2">
            <h5>"A truly next-gen trading app"</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              rhoncus eget iaculis vitae elementum, in sagittis, hac.{" "}
            </p>
            <div style={{ textAlign: "center" }}>
              <Button content="Read" buttonStyles={buttonStyles} />
            </div>
          </div>
          <div className="p-2">
            <img src={LogoImage} alt="logoimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
