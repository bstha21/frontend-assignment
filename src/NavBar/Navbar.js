import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container my-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/productdetails">Product Details</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar