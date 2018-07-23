import React, { Component } from 'react';

class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <a href="/" className="navbar-brand">
            ClientPanel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li>
                <a href="/" className="nav-link">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
