import React from "react";
//import { Link } from "react-router-dom";
// reactstrap components
import {Navbar, Nav} from 'react-bootstrap';

import { FiLogOut } from 'react-icons/fi';

class ComponentsNavbar extends React.Component {
  
  render() {
    return (
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">Reinventta</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/trilhas">Trilhas</Nav.Link>
            <Nav.Link href="/parceiros">Parceiros</Nav.Link>
            <Nav.Link href="/cursos">Cursos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="">
            Sair &nbsp;
            <FiLogOut size="26" color="#F33" />  
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
