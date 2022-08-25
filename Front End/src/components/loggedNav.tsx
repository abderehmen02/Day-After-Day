import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3 ">
      <div className="container">
        <a href="#" className="navbar-brand">Day After Day</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#questions" className="nav-link">Productivity</a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link">Goals</a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link"> About The App </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar