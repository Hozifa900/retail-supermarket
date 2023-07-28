import React from "react";
import "./Header.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="./">
          MUM Golden Dome Market : : : SRM System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="./products" className="header-item">
              Products
            </Nav.Link>
            <Nav.Link href="./suppliers" className="header-item">
              Suppliers
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="light">Sign in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
