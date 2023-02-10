import React from "react";

//TODO: types for props

const Input = React.forwardRef((props: any, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
