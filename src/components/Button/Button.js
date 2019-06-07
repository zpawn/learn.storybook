import React from "react";
import PT from "prop-types";

const button = ({ children, type = "submit", onClick = null, ...props }) => (
  <button type={type} {...props} onClick={onClick}>
    {children}
  </button>
);

button.propTypes = {
  children: PT.oneOfType([PT.element, PT.string]),
  type: PT.oneOf(["button", "submit", "reset"]),
  onClick: PT.func
};

export default button;
