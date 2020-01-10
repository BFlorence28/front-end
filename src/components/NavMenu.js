import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

const NavMenu = props => {
  const logOut = () => {
    localStorage.clear();
    props.history.push('/');
  }

  if (localStorage.getItem('token')) { // We're logged in
    return (
      <header className="header">
        <NavLink to="/" className="logo">Refugee Stories</NavLink>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
        <ul>
          <li><NavLink to="/review">Review Stories</NavLink></li>
          <li><NavLink to="/about">Edit Story</NavLink></li>
          <span onClick={logOut}>Logout</span>
        </ul>
      </header>
    );
  } else { // Unauthenticated user
    // TODO: Add: "Submit your story"
    // STRETCH: Add page to "Get Involved"
    return (
      <header className="header">
        
          <NavLink to="/" className="logo">LOGO</NavLink>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
          <ul className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/login">Admin Login</NavLink></li>
          </ul>

      </header>
    );
  }
}

export default withRouter(NavMenu);
