import React from 'react'
import './Navbar.css'
import CardWidget from './CardWidget'
const Navbar = () => {
    return (
        <div className="row align-items-center">
            <nav className="navbar">
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
            </nav> 
        </div>
    )
}

export default Navbar
