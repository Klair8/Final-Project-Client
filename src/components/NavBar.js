import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
      <Navbar bg="light" expand="lg" class="navbar navbar-expand-lg navbar-light bg-transparent">
        <Container>       
          <Navbar.Brand >Dream Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to ={`/`}>Home</Nav.Link>
              <Nav.Link href="#link">kids-stories</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;