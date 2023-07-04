import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container my-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Search Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Product Details</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar