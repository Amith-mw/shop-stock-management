import React from "react";
import "./Button.css";

const Button = ({ btnName, btnColor, btnIcon }) => {
  return (
    <button className={`button ${btnColor}`}>
      {btnName}
      {btnIcon}
    </button>
  );
};

export default Button;
