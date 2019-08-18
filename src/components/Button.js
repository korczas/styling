import React from "react";

export default function Button(props) {
  const { appearance, text } = props;

  return <button className={`button ${appearance}`}>{text}</button>;
}
