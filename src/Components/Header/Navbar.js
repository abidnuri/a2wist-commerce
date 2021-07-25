import React from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand className='text-secondary' as={Link} to="/home">A2IST E-Commerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-3 font-weight-bold">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/service">Services</Nav.Link>
      <Nav.Link as={Link} to="/review">Review</Nav.Link>
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/contract">Contract</Nav.Link>
      <Button as={Link} to="/login" variant="outline-success btn-sm">Log In</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navigation;