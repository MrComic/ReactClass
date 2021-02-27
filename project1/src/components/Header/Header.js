import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../contexts/ShoppingCardContext";

export function Header(props) {
  const [cards, setCards] = useContext(ShoppingCardContext);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            products
          </Link>
          <Link className="nav-link" to="/Card">
            ShoppingCard({cards.length})
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
