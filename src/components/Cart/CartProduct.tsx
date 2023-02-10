type Props = {
  onRemove: () => void;
  onAdd: () => void;
  amount: number;
  title: string;
  price: number;
};

const CartProduct = ({ amount, title, price, onRemove, onAdd }: Props) => {
  const priceWithCurrency = `${price} €`;

  return (
    <li>
      <div>
        <h2>{title}</h2>
        <div>
          <span>{priceWithCurrency}</span>
          <span>x {amount}</span>
        </div>
      </div>
      <div>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartProduct;
