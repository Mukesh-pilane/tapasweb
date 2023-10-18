import React from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav__container">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
      </div>
      <ul className="navbar-links">
        <li className="navbar-link"><Link to={`/aboutus`}>About</Link></li>
        <li className="navbar-link"><Link to={`/events`}>Events</Link></li>
        <li className="navbar-link"><Link to={`/team`}>Team</Link></li>
        <li className="navbar-link"><Link to={`/contact`}>Contact</Link></li>
      </ul>
      </div>

    </nav>
  );
};

export default Navbar;
