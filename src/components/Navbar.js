import React, { Component } from 'react'
import { Link} from 'react-scroll'
import {Nav, Navbar} from 'react-bootstrap'
import title from '../static/title.png'
import '../styles/Navbar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="bar-wrapper">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
          <Navbar.Brand href="#home"><img className="nav-title" src={title} alt="title"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Link className='bar-elements' to="About" spy={true} smooth={true} offset={-100} duration={700}>
              About
            </Link>
            <Link className='bar-elements' to="Skill" spy={true} smooth={true} offset={-90} duration={700}>
              Skill
            </Link>
            <Link className='bar-elements' to="Project" spy={true} smooth={true} offset={-80} duration={700}>
              Project
            </Link>
            <Link className='bar-elements' to="Experience" spy={true} smooth={true} offset={-20} duration={700}>
              Contract
            </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}

export default NavBar
