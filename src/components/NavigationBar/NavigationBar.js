import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
// import img1 from '../../images/logo_white_dot.png';


export default function NavigationBar() {

    const [expanded, setExpanded] = useState(false);

    const closeMenu = () => setExpanded(false);

    const toggleMenu = () => setExpanded(!expanded);

    const { pathname } = useLocation();

    const selectedPageClass = "text-white underline-red font-smaller";
    const notSelected = "font-smaller";

    return (
        < >
            <Navbar bg="black" expand="lg" expanded={expanded} variant="dark" className="recursiveFont">
                <Container>
                    <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
                        <img
                            src={"imgs/logo_white_dot.png"}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="RG logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" onClick={closeMenu} className={pathname === "/" ? selectedPageClass : notSelected}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" onClick={closeMenu} className={pathname === "/portfolio" ? selectedPageClass : notSelected}>
                                Training
                            </Nav.Link>
                            <Nav.Link as={Link} to="/resume" onClick={closeMenu} className={pathname === "/resume" ? selectedPageClass : notSelected}>
                                About 
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" onClick={closeMenu} className={pathname === "/contact" ? selectedPageClass : notSelected}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
