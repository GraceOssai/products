import React from "react";

const Button = ({ onClickHandler, title, value }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
