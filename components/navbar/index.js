import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Nichole Steig</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar>
    );
}

export default Navbar;