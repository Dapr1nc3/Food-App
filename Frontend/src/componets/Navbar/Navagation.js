import react from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import siteLogo from "../../assets/images/logo.png";
import Auth from "../../utils/auth";

function Navigation() {
  return (
    <div className="App">
      <Navbar
        className="nav-bar"
        // bg="dark"
        // variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Container className="nav-bar">
          <Navbar.Brand className="nav-bar">
            <Nav.Link href="/">
              <img alt="" src={siteLogo} className="site-logo"></img>
            </Nav.Link>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/signin">Log in</Nav.Link>
              <Button href="/signup" className="mx-2 sign-up-btn" variant="">
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
