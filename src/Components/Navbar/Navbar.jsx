import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container-fluid nav_background">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Json's Pvt. Ltd</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <NavLink activeClassName="menu_active" className="nav-link" exact to="/">Home</NavLink>
                    <NavLink activeClassName="menu_active" className="nav-link" exact to="/about">About</NavLink>
                    <NavLink activeClassName="menu_active" className="nav-link" exact to="/service">Services</NavLink>
                    <NavLink activeClassName="menu_active" className="nav-link" exact to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar