import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container-fluid nav_background">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">JSONS WebDev</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" exact to="/about">About</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" exact to="/service">Services</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" exact to="/contact">Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Navbar