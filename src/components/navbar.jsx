import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../css/navbar.css";

import Button from "../common/button";

const Example = () => {
  const navBtnStyles = {
    color: "#fff",
    fontSize: "1.1rem",
    width: "10.563rem",
    height: "2.831rem",
    fontWeight: "200",
    borderRadius: "50px",
    border: "2px solid #fff",
  };

  const navLinkStyles = {
    color: "#fff",
    fontSize: "18px"
  };

  const navLogoStyles = {
    color: "#fff",
    fontSize: "35px"
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="#261E35"
      variant="dark"
      className="m-0"
    >
      <Navbar.Brand href="#home">
        <a style={navLogoStyles} className="navbar-brand" href="https://nayatoken.com">
          <img src={Logo} alt="naya-logo" className="me-2" />
          NAYA
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link style={navLinkStyles} href="#about">
            About
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#features">
            Features
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#beginners">
            Beginners guide
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#tokenomics">
            Tokenomics
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#roadmap">
            Roadmap
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#whitepaper"> Whitepaper</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Button content="Buy NAYA" buttonStyles={navBtnStyles} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Example;
