import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Container, Nav } from 'react-bootstrap';

export default function Navbar() {
  return (
    <BSNavbar bg="light" expand="lg" className="mb-4">
      <Container>
        <BSNavbar.Brand as={Link} to="/">Notes App</BSNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/notes">Home</Nav.Link>
          <Nav.Link as={Link} to="/notes/new">Create</Nav.Link>
        </Nav>
      </Container>
    </BSNavbar>
  );
}