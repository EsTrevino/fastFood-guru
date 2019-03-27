import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const AuthenticatedNav = props => {
  let { firstname, avatar, logout } = props;
  return (
    <Navbar className="container p-2" expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand className="text-white">
            Welcome {firstname}
          </Navbar.Brand>

          <Nav.Link className="text-white app-link">
            <Link className="app-link" to="/review">
              <span>Write a Review</span>
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="text-white app-link">
            <Link className="app-link" to="/dashboard">
              <span>
                <FontAwesomeIcon icon={faAddressCard} size="lg" />
              </span>
            </Link>
          </Nav.Link>
          <Nav.Link onClick={() => logout()} className="text-white app-link">
            <span>Log out</span>
          </Nav.Link>
          <Nav.Link className="auth-holder pl-2" disabled>
            <img className="auth-image" alt="avatar" src={`${avatar}`} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AuthenticatedNav;
