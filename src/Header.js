import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>WebAppName</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-collapse">
          <span><i className="fa fa-align-justify"></i></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-collapse">
          <Nav className="me-auto">
            {/* Further Menu items */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function NavLink(props) {
  return (
    <LinkContainer to={props.to}>
      <NavDropdown title={props.header} id="basic-nav-dropdown">
        {/* Further Menu items */}
        {props.children}
      </NavDropdown>
    </LinkContainer>
  );
}
