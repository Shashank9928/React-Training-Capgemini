import React from "react";
import "./css/navbar.css";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="container-fluid navbar">
      <div className="container" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            &nbsp;
            <i class="fa-solid fa-laptop-file"></i>
            &nbsp;
            EMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink exact activeClassName="active" className="nav-link" to="/" >
                  Home
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Complience
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">
                    <NavLink activeClassName="active" className="" to="/raisecomplain" >
                      Raise Complain
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink activeClassName="active" className="" to="/complains" >
                      Complains
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink activeClassName="active" className="" to="/addstatusreport" >
                      Add Status Report
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink activeClassName="active" className="" to="/getallstatusreport" >
                      Status Report
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}