import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <React.Fragment>
    <div className="navbar">
      <div className="nav-link nav-brand">
        <NavLink to="/">HN_Clone</NavLink>
      </div>
      <nav className="nav-items nav-items-right">
        <div className="nav-link">
          <NavLink to="/newest">New</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/ask">Ask</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/show">Show</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/jobs">Jobs</NavLink>
        </div>
      </nav>
    </div>
  </React.Fragment>
);

export default Navbar;
