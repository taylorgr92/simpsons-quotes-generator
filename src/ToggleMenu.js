import React from "react";
import { Nav, Navbar,Container } from "react-bootstrap";

const ToggleMenu = () => {

  return (
    <Navbar expand="md">
      <Container fluid>
   
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ToggleMenu;
