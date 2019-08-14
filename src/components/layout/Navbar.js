import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <React.Fragment>
    <div className="bg-blue">
      <nav className="flex items-center pa2">
        <NavLink to="/" className="lh-title link white">
          HN_Clone
        </NavLink>
        <div className="ml-auto">
          <NavLink to="/newest" className="pa1 link white">
            New
          </NavLink>
          <NavLink to="/ask" className="pa1 link white">
            Ask
          </NavLink>
          <NavLink to="/show" className="pa1 link white">
            Show
          </NavLink>
          <NavLink to="/jobs" className="pa1 link white">
            Jobs
          </NavLink>
        </div>
      </nav>
    </div>
  </React.Fragment>
);

export default Navbar;
