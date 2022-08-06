import React from "react";
import Button from "./Button";

import logo from "../assets/images/logo.svg";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />
      <div className="navbar__elements">
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
