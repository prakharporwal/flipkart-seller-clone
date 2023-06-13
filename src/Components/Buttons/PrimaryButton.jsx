import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  return (
    <button className="primary-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
