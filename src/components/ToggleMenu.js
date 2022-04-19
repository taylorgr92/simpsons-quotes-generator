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
            <Nav.Link href="/home" style={{color:"white"}} className="link">Home</Nav.Link>
            <Nav.Link href="/contact" style={{color:"white"}} className= "link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ToggleMenu;
