import React from "react";


const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      <label htmlFor="Vali">Vali kellele panustad:</label>
    </div>
  );
});

export default Input;