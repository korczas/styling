import React, { useState } from "react";
import Button from "./Button";

import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";

export default function Navbar(props) {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div>
        <div className="navbar__logo-and-menu">
          <img src={logo} alt="logo" className="navbar__logo" />

          <img
            src={menu}
            alt="menu"
            className="navbar__menu"
            onClick={() => toggleMenu(isMenuOpen => !isMenuOpen)}
          />
        </div>
      </div>
        <div className={`navbar__elements ${isMenuOpen ? '' : '-hide'}`}>
          <a className="navbar__element">Features</a>
          <a className="navbar__element">Apps</a>
          <a className="navbar__element">Pricing</a>
          <a className="navbar__element">Knowledge Base</a>
          <a className="navbar__element">Business</a>
          <Button text="LOG IN" appearance="-secondary navbar__element" />
          <Button text="SIGN UP" appearance="-primary navbar__element" />
        </div>
    </div>
  );
}
