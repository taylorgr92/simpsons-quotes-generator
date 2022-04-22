import React from "react";
import { Nav, Navbar,Container } from "react-bootstrap";



const ToggleMenu = () => {

  return (
    <Navbar expand={false} className= "navbar-menu">
      <Container fluid>
        <Navbar.Brand href="/home" className="simpsons-brand">
          <img src="img/simpson-house2.png" alt= "Simpson House" />
          </Navbar.Brand>
   
        <Navbar.Toggle aria-controls="navbarScroll" className= "navbar-toggle"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "110px" }}
            navbarScroll
          >
            <Nav.Link href="/home" className="link">Home</Nav.Link>
            <Nav.Link href="/contact" className= "link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ToggleMenu;
