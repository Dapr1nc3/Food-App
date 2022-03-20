import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function Navigation() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/signin">Log in</Nav.Link>
              <Button href="/signup" className="mx-2" variant="primary">
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
