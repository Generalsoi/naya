import React from "react";
import Button from "../common/button";
import "../css/footer.css";
import Logo from "../images/logo.png";

const Footer = () => {
  const buttonStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Poppins",
    width: "10rem",
    height: "4.2rem",
    borderRadius: "50px",
    border: "1px solid #fff",
    color: "#fff",
  };
  return (
    <React.Fragment>
      <div className="footer d-lg-flex justify-content-between align-items-start">
        <div className="p-2">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Beginners guide</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Blog Post</a>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h4>Newsletter</h4>
          <input placeholder="Your email address" />
          <Button
            className="footer-btn"
            content="Subscribe"
            buttonStyles={buttonStyles}
          />
        </div>
      </div>

      <nav className="footer-navbar navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="naya-logo" className="me-2" />
            NAYA
          </a>
          <p>
            Copyright © 2021 | Designed & Created with love by the NAYA team.
          </p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Footer;
