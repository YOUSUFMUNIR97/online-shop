import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="/">
          <h4>Online Shopping</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link style={{ color: "#111" }}>
              {" "}
              <Link to="/dashboard">Dashboard</Link>{" "}
            </Nav.Link>
            <Nav.Link style={{ color: "#111" }}>
              {" "}
              <Link to="/login">Login</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <button className="button-sign-up">
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/register"
                >
                  Sign up
                </Link>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
