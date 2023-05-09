import React from "react";
const Input = ({name,label}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        name={name}
        id={name}
        className="form-control"
        aria-describedby="emailHelp"
      />
    </div>
  );
};
export default Input;