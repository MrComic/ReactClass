import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">session 7</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            products
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
