import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <header className="header">
      <Navbar className="navbar">
        <Container fluid="lg">
          <Navbar.Brand className="navbar__brand" href="#"></Navbar.Brand>
          <Nav className="navbar__list">
            {/* <Nav.Link
              className="navbar__link d-none d-lg-block px-0"
              href="#home"
            >
              Inicio
            </Nav.Link> */}
            <Nav.Link
              className="navbar__link d-none d-lg-block px-0"
              href="#about"
            >
              Sobre mí
            </Nav.Link>
            <Nav.Link
              className="navbar__link d-none d-md-block px-0"
              href="#skills"
            >
              Competencias
            </Nav.Link>
            <Nav.Link
              className="navbar__link d-none d-sm-block px-0"
              href="#services"
            >
              Servicios
            </Nav.Link>
            <Nav.Link className="navbar__link d-none px-0" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="navbar__link px-0" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
