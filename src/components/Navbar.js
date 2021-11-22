import React from 'react'
import './Navbar.css'
import CardWidget from './CardWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        /*<nav className="navbar navbar-expand">
        <div className="container-fluid">
           
                <div className="col-md-6 text-title">E-COMMERCE</div>
                <div className="col-md-6">
                    <ul className="navbar-menu">
                        <li className="navbar-item navbar-item-home">Inicio</li>
                        <li className="navbar-item">Remeras</li>
                        <li className="navbar-item">Buzos</li>
                        <li className="navbar-item">Accesorios</li>
                        <li className="navbar-item"><CardWidget/></li>
                    </ul>
                </div>
            
        </div>
        </nav> */
        <Navbar  expand="lg">
        <Container >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar navbar-menu">
                <Nav.Link  className="navbar-item navbar-item-home" href="#home">Home</Nav.Link>
                <Nav.Link className="navbar-item" href="#link">Link</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item className="navbar-item" href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item className="navbar-item" href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item className="navbar-item" href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar-item" href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navbar-item"><CardWidget/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        
    )
}

export default NavBar
