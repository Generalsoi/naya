import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "./images/logo.png";

import Button from "./common/button";

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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="naya-logo" className="me-2" />
            NAYA
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="light">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Beginners guide</Nav.Link>
            <Nav.Link href="#">Tokenomics</Nav.Link>
            <Nav.Link> Whitepaper</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button content="Buy NAYA" buttonStyles={navBtnStyles} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Example;
