import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/gallery/sunsets">Sunsets</NavLink>
          </li>
          <li>
            <NavLink to="/gallery/waterfalls">Waterfalls</NavLink>
          </li>
          <li>
            <NavLink to="/gallery/mountains">Mountains</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;