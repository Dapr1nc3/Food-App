import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
      <div className='App'>
        <Navbar bg="dark" variant="dark" sticky='top' expand="sm" collapseOnSelect>
          <Navbar.Brand>
            Logo
          </Navbar.Brand>
  
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
  
        </Navbar>
      </div>
    );
  }

  
  
  export default Navigation;