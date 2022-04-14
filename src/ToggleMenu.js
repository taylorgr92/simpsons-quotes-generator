import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const ToggleMenu = () => {
  return (
    <Navbar collapseOnSelect expand="xs">
      <Container fluid className="footer-container">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-icon" 
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#Home" style= {{color:'white' }}>Home</Nav.Link>
            <Nav.Link href="#Contact" style= {{color:'white'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ToggleMenu;
