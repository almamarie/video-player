import React from "react";

const RadioInput = (props) => {
  return (
    <div>
      <input
        id={props.value}
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked || false}
        onChange={props.onChange}
      />
      <label htmlFor={props.value}>{props.value}</label>
    </div>
  );
};

export default RadioInput;
