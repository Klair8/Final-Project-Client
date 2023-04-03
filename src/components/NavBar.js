import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
      <Navbar bg="light" expand="lg" class="navbar navbar-expand-lg navbar-light bg-transparent">
        <Container>       
          <Navbar.Brand as={NavLink} exact to="/" >Dream Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link as={NavLink} exact to="/" >Home</Nav.Link> 
              <Nav.Link as={NavLink} exact to="/stories/age-3-5">kids-stories</Nav.Link>
              <Nav.Link as={NavLink} exact to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;