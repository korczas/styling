import React from "react";
import Button from "./Button";

import logo from "../assets/images/business_communication.png";

export default function BusinessCommunication(props) {
  return (
    <div className="buscom">
      <img src={logo} alt="" className="buscom__image" />
      <div className="buscom__overview">
        <h2>Communicate. Collaborate. Complete.</h2>
        <p className="buscom__description">
          The remote collaboration tool to help you communicate effectively and
          work productively.
        </p>
        <label htmlFor="email">Email address</label>
        <input type="email" className="buscom__input" id="email"/>
        <div className="buscom__try-it">
          <div>
            Try Droplr <strong>PRO free for 30 days.</strong>
            <br />
            No credit card needed. <a className="underline">Privacy Policy</a>
          </div>
          <Button text="Get Started" appearance="-success navbar__element" />
        </div>
      </div>
    </div>
  );
}
