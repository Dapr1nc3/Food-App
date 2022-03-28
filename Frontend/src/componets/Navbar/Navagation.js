import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
<<<<<<< HEAD:src/componets/Navbar/Navagation.js
import siteLogo from "../../assets/images/logo.png"
=======
import siteLogo from "../../assets/images/logo.png";
>>>>>>> workspace-Devin:Frontend/src/componets/Navbar/Navagation.js

function Navigation() {
  return (
    <div className="App">
      <Navbar className="nav-bar"
        // bg="dark"
        // variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/">
              <img alt="" src={siteLogo} className="site-logo"></img>
            </Nav.Link>
<<<<<<< HEAD:src/componets/Navbar/Navagation.js
            
=======
>>>>>>> workspace-Devin:Frontend/src/componets/Navbar/Navagation.js
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
<<<<<<< HEAD:src/componets/Navbar/Navagation.js
              <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
              <Nav.Link href="/about" className="navbar-link">About</Nav.Link>
              <Nav.Link href="/contact" className="navbar-link">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Button href="/signin" variant="danger">
                Log in
              </Button>
              <Nav.Link href="/signup" className="mx-2" variant="primary">
=======
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/signin">Log in</Nav.Link>
              <Button href="/signup" className="mx-2" variant="primary">
>>>>>>> workspace-Devin:Frontend/src/componets/Navbar/Navagation.js
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
