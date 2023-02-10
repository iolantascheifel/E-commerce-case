import { useRef } from "react";
import Input from "../UI/Input";

type Props = {
  onAddToCart: (arg0: number) => void;
  id: number;
};

const SingleProductAmountInput = ({ onAddToCart, id }: Props) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: any) => {
    event.preventDefault();

    // @ts-ignore
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
      <button>+ Add</button>
    </form>
  );
};

export default SingleProductAmountInput;
