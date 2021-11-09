import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="row align-items-center">
            <div className="navbar">
                <div className="col-md-6 text-title">E-COMMERCE</div>
                <div className="col-md-6">
                    <ul className="navbar-menu">
                        <li className="navbar-item navbar-item-home">Inicio</li>
                        <li className="navbar-item">Remeras</li>
                        <li className="navbar-item">Buzos</li>
                        <li className="navbar-item">Accesorios</li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Navbar
