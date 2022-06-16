import React, { useEffect, useState } from "react";
import './MainNav.css'
import logo from "../assets/img/logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function MainNav() {

  const [show, setShow] = useState();
  const navbarControl = () =>{
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navbarControl);
    return () => window.removeEventListener("scroll", navbarControl);
  }, []);

  return (
    <div className={`nav ${show && "nav-bg"}`}>
      <Container>
        <Navbar expand="lg" fixed="top" className="main-nav">
          <Container>
            <Navbar.Brand className="navbar-spa " href="#">
              <a className="navbar-default" href="#top">
                <img src={logo} alt="Logo" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end navbar-spa" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="#why-react">
                    <a className="" href="#why-react">
                      Why React?
                    </a>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#get-started">
                    <a className="" href="#get-started">
                      Get Started
                    </a>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#usefulLinks">
                    <a className="" href="#usefulLinks">
                      UsefulLinks
                    </a>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact">
                    <a className="" href="#contact">
                      Contact
                    </a>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact">
                    <a className="" href="https://react-spa-tutorial.netlify.app/">
                      Netlify link
                    </a>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
