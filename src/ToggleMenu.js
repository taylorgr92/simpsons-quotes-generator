import React from 'react';
import { Navbar,Container } from 'react-bootstrap';


const ToggleMenu = () => {
    
    return(
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controls="toggle-menu">

                </Navbar.Toggle>
            </Container>
        </Navbar>
    );
    
};


export default ToggleMenu;