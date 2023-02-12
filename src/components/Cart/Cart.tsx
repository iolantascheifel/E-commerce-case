import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import { Product } from "../Types";
import GenericButton from "../UI/GenericButton";

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

  const cartItemDecreaseAmountHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  const removeItemFromCartHandler = (id: number) => {
    cartCtx.deleteItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartProduct
          key={item.id}
          title={item.title}
          amount={item.amount as number}
          price={item.price}
          onRemove={cartItemDecreaseAmountHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onDelete={removeItemFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      <TotalAmountContainer>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </TotalAmountContainer>
      <CartTitle>Your Cart</CartTitle>
      <ItemsContainer>{cartItems}</ItemsContainer>
      <CartActionsContainer>
        <GenericButton text="Close" onClick={onClose} />
        {hasItems && <GenericButton text="Order" styled="colored" />}
      </CartActionsContainer>
    </Modal>
  );
};

export default Cart;

const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  gap: 20px;
`;

const CartTitle = styled.h3`
  margin: 15px 0 40px 0;
`;

const ItemsContainer = styled.div`
  max-height: 40vh;
  overflow-x: scroll;
  width: 80%;
`;

const CartActionsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 70%;
  justify-content: center;
  margin-top: 50px;
`;
