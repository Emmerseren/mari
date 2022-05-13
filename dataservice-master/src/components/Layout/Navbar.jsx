import React from "react";
import { NavLink } from "react-router-dom";
import mylogo from "../images/mylogobom.svg";


const Navbar = () => {
  return (
    <nav className="nav_bar">
      <img  src={mylogo} alt="logo" className="logo" />
      <ul className="nav_bar_ul">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/starwars1">starwars</NavLink>
        </li>
        <li>
          <NavLink to="/starships">starwhips</NavLink>
        </li>
        <li>
          <NavLink to="/nyheder">Nyheder</NavLink>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
