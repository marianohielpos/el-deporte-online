import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="bg-light justify-content-between"
    >
      <Navbar.Brand href="/">El deporte online</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="/catalogo">Catalogo</Nav.Link>
      <Nav.Link href="/informacion">Informacion</Nav.Link>
    </Nav>
    </Navbar>
  );
};

export default Header;
