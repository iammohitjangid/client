import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand>
             <p className="h4 light-text">Data Visualization</p>
            </Navbar.Brand>
         </Container>
        </Navbar>
    )
}

export default NavBar
