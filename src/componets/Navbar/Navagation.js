import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import siteLogo from "../../assets/images/logo.png"

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
          <Navbar.Brand>
            <Nav.Link href="/">
              <img alt="" src={siteLogo} className="site-logo"></img>
            </Nav.Link>
            
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Button href="/signin" variant="danger">
                Log in
              </Button>
              <Nav.Link href="/signup" className="mx-2" variant="primary">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
