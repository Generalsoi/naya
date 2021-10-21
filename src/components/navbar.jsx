import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../css/navbar.css";

import Button from "../common/button";

const Example = () => {
  const navBtnStyles = {
    color: "#fff",
    fontSize: "1.125rem",
    width: "10.563rem",
    height: "2.831rem",
    fontWeight: "500",
    borderRadius: "50px",
    border: "2px solid #fff",
  };

  const navLinkStyles = {
    color: "#fff",
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
        <a style={navLinkStyles} className="navbar-brand" href="#">
          <img src={Logo} alt="naya-logo" className="me-2" />
          NAYA
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link style={navLinkStyles} href="#">
            About
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#">
            Features
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#">
            Beginners guide
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#">
            Tokenomics
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#">
            Roadmap
          </Nav.Link>
          <Nav.Link style={navLinkStyles}> Whitepaper</Nav.Link>
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