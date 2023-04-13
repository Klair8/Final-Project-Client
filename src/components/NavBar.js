import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
      <Navbar bg="danger p-2 text-dark bg-opacity-25" expand="lg" class="navbar navbar-expand-lg navbar-light bg-transparent">
        <Container>       
          <Navbar.Brand as={NavLink} exact to="/" >Dream Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link as={NavLink} exact to="/" >Home</Nav.Link> 
              <Nav.Link as={NavLink} exact to="/kids-stories">kids-stories</Nav.Link>
              <Nav.Link as={NavLink} exact to="/stories/level1">Stories Ages 3-5</Nav.Link>
              <Nav.Link as={NavLink} exact to="/stories/level2">Stories Ages 5-6</Nav.Link>
              <Nav.Link as={NavLink} exact to="/stories/level3">Stories Ages 6-7</Nav.Link>
              <Nav.Link as={NavLink} exact to="/stories/adventure">Adventures Stories</Nav.Link>
              <Nav.Link as={NavLink} exact to="/EasyA">Easy Alphabet</Nav.Link>
              <Nav.Link as={NavLink} exact to="/Favorite">Favorite</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;