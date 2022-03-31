import React from 'react';
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap';


const ToggleMenu = () => {
    
    return(
        <Navbar collapseOnSelect expand="xs">
  <Container>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
    
};


export default ToggleMenu;