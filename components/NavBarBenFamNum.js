import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';

export default class NavBarBenFamNum extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar inverse toggleable>
          <NavbarToggler left onClick={this.toggle} />
          <Link prefetch href="/"><NavbarBrand>
            <img src='/static/marca-creu-blanca.jpg' alt='Inicio' />
          </NavbarBrand></Link>
          <span className='align-nav'>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem><Link prefetch href="/presentacion">
                  <a>Presentación</a>
                </Link></NavItem>
                <NavItem><Link prefetch href="/">
                  <a>Programa</a>
                </Link></NavItem>
                <NavItem><Link prefetch href="/inscripciones">
                  <a>Inscripciones</a>
                </Link></NavItem>
                <NavItem><Link prefetch href="/patrocinio">
                  <a>Patrocinio</a>
                </Link></NavItem>
                <NavItem><Link prefetch href="/creu-blanca">
                  <a>¿Qué es Creu Blanca?</a>
                </Link></NavItem>
                <NavItem><Link prefetch href="/secretaria-tecnica">
                  <a>Secretaría Técnica</a>
                </Link></NavItem>
              </Nav>
            </Collapse>
          </span>
        </Navbar>
        <style jsx>{`
          .align-nav {
            text-align:center;
          }
          a {
            color:#02272e;
            margin:0 1em;
          }
          a:hover {
            color:#02272e;
            text-decoration:underline;
          }
        `}</style>
      </div>
    );
  }
}