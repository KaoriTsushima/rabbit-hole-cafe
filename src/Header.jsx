import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Rabbit Hole Cafe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br /> */}

      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand href="/">Rabbit Hole Cafe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="menu">Menu</Nav.Link>
            <Nav.Link href="about-us">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
