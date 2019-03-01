import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

export default function NavBar() {
  return (
    <div>
      <NavLink exact to="/">
        Smurfs
      </NavLink>
      <NavLink exact to="/smurf-form">
        Smurfs Form
      </NavLink>
    </div>
  );
}
