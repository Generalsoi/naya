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
              <a href="https://nayatoken.com">Home</a>
            </li>
            <li>
              <a href="https://nayatoken.com">About</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Features</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Beginners guide</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Roadmap</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Whitepaper</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="https://nayatoken.com">Telegram</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Twitter</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Instagram</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Discord</a>
            </li>
            <li>
              <a href="https://nayatoken.com">Blog Post</a>
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
          <a className="navbar-brand" href="https://nayatoken.com">
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
