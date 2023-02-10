import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Product } from "../../Types";

import Modal from "../UI/Modal";
import CartProduct from "./CartProduct";

type Props = {
  onClose: () => void;
};

const Cart = ({ onClose }: Props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount} €`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item: Product) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartProduct
          key={item.id}
          title={item.title}
          // @ts-ignore
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button onClick={onClose}>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
