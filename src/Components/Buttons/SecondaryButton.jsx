import React from "react";
import "./SecondaryButton.scss";

const SecondaryButton = (props) => {
  return (
    <button className="secondary-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default SecondaryButton;
