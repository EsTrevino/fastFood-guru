import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';

const UnauthenticatedNav = () => {
  return (
    <Navbar className="container p-3" expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="text-white app-link">
            <Link className="app-link" to="/auth">
              {' '}
              <span>Log In / Sign Up</span>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default UnauthenticatedNav;
