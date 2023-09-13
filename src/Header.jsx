import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand href="/">Rabbit Hole Caf&eacute;</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="menu">Menu</Nav.Link>
            <Nav.Link href="about-us">About us</Nav.Link>
            <Nav.Link href="login">Log-in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
