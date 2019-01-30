import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div>
      <Navbar className="NavBar" expand="md">
        <NavbarBrand className="NavBrand" href="/">
          Variant Viewer
        </NavbarBrand>
        <Nav className="ml-auto NavItem" navbar>
          <NavItem>
            <NavLink className="NavLink" href="/Login/">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
