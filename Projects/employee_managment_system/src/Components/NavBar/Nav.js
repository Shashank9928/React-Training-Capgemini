import React from "react";
import "./css/navbar.css";
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
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}