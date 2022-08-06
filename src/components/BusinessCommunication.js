import React from "react";
import Button from "./Button";

import logo from "../assets/images/business_communication.png";
import play from "../assets/images/play.svg";

export default function BusinessCommunication(props) {
  return (
    <div className="buscom__wrapper">
      <div className="buscom__content">
        <div className="buscom__image">
          <img src={logo} alt="" className="buscom__image" />
          <div className="play-button">
            <img src={play} alt="" />
          </div>
        </div>
        <div className="buscom__overview">
          <span className="buscom__header">
            Communicate. Collaborate. Complete.
          </span>
          <p className="buscom__description">
            The remote collaboration tool to help you communicate effectively
            and work productively.
          </p>
          <div className="form__item">
            <label htmlFor="email">Email address</label>
            <input type="email" className="buscom__input" id="email" />
          </div>
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
    </div>
  );
}
