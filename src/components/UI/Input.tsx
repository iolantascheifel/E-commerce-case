import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props: any, ref) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <InputStyle ref={ref} {...props.input} />
    </>
  );
});

export default Input;

const InputStyle = styled.input`
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  text-align: center;
  margin-left: 10px;
  padding: 5px 5px;
  font-size: 14px;
`;
