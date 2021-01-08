import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

import '../Style/Navbarr.css'
import {Link} from "react-router-dom";

const Navbarr = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
        return(
            <div>
                <Container>
                    <Navbar light expand="md">

                        <NavbarBrand href="/">Logo</NavbarBrand>

                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/About">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Testimonials">Testimonials</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">Contact</NavLink>
                            </NavItem>
                        </Nav>

                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        )
}

export default Navbarr;


/*

            <div className="navbar">
                
                <div className="container">
                    
                    <div className="logo">
                        <h2 className="logo-text">Blog</h2>
                    </div>
               
               
                    <ul className="ul-list">
                        <li className="list-item"><Link to='/'>Home</Link></li>
                        <li className="list-item"><Link to='/About'>About</Link></li>
                        <li className="list-item"><Link to='/Blog'>Blog</Link></li>
                        <li className="list-item"><Link to='/Testimonials'>Testimonials</Link></li>
                        <li className="list-item"><Link to='/Services'>Services</Link></li>
                        <li className="list-item"><Link to='/Contact'>Contact</Link></li>

                    </ul>
                    
                </div>
                
            </div>

            */