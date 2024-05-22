import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="md" className="py-4">
      <Container>
        {/* <Navbar.Brand type={"span"}>
          <Link to="/" className="text-decoration-none text-dark fw-bold fs-3">
            TMDB
          </Link>
        </Navbar.Brand> */}
        <Navbar.Brand as={Link} to="/">TMDB</Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse >
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/"
                className="fs-5 "
              >
                Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about"
                className="fs-5"
              >
                About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
