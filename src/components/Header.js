import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

function Header() {
  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="./logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/">Train</Nav.Link>
            <Nav.Link href="#/test/33">Test</Nav.Link>
            <Nav.Link href="#/test2">test2</Nav.Link>
            <Nav.Link href="#/test3">test3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Header