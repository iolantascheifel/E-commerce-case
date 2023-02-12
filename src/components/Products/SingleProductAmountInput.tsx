import React, { useRef } from "react";
import GenericButton from "../UI/GenericButton";
import Input from "../UI/Input";

type Props = {
  onAddToCart: (arg0: number) => void;
  id: number;
};

const SingleProductAmountInput = ({ onAddToCart, id }: Props) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //@ts-ignore
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div style={{ padding: "10px 0" }}>
        <GenericButton text="+ Add" styled="colored" />
      </div>
    </form>
  );
};

export default SingleProductAmountInput;
