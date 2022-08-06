/* eslint-disable */

import React, { useState } from "react";
import Button from "./Button";

import { ReactComponent as Menu } from "../assets/images/menu.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

export default function Navbar(props) {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo-and-menu">
        <Logo alt="logo" className="navbar__logo" />

        <button onClick={() => toggleMenu(isMenuOpen => !isMenuOpen)} className="navbar__menu-button">
          <Menu alt="menu" className="navbar__menu" />
        </button>
      </div>
      <nav className={`navbar__elements ${isMenuOpen ? "" : "-hide"}`}>
        <a className="navbar__element">Features</a>
        <a className="navbar__element">Apps</a>
        <a className="navbar__element">Pricing</a>
        <a className="navbar__element">Knowledge Base</a>
        <a className="navbar__element">Business</a>
        <Button text="log in" appearance="-secondary navbar__element uppercase" />
        <Button text="sign up" appearance="-primary navbar__element uppercase" />
      </nav>
    </div>
  );
}
