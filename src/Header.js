import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  linkActive(path) {
    if (window.location.pathname === path) {
      return 'active'
    }
  }

  render() {

    return (
      <div className="container">
        <header className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item">
                <a className={`nav-link ${this.linkActive('/')}`} href="/">Deliveries</a>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${this.linkActive('/new')}`} to={'/new'}>
                  New Delivery
                </Link>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">CartonCloud</h3>
        </header>
      </div>
    );
  }
}

export default Header;
