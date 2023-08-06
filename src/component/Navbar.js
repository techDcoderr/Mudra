import React from 'react'
import { NavLink } from "react-router-dom";
import loggo from '../images/loggo.png'
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'black'}}>
  <div className="container-fluid" >
    <NavLink className="navbar-brand" to="/">
      <img src={loggo} alt="Logo" className="navbar-logo" />
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/News">
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Crypto">
            Crypto
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Converter">
            Currency Converter
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Country">
            Country Currency
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar
