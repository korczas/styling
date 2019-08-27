import React from "react";
import Button from "./Button";

import logo from "../assets/images/business_communication.png";
import { ReactComponent as Play } from "../assets/images/play.svg";

export default function BusinessCommunication(props) {
  return (
    <section className="buscom">
      <div className="buscom__content">
        <div className="buscom__image">
          <span />
          <img src={logo} alt="" />
          <div className="buscom__play-button-circle">
            <Play className="buscom__play-button"/>
          </div>
        </div>
        <div className="buscom__overview">
          <div className="buscom__header">
            Communicate. Collaborate. Complete.
          </div>
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
            <Button text="Get Started" appearance="-success" />
          </div>
        </div>
      </div>
    </section>
  );
}
