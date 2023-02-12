import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import { CartIcon } from "../UI";

type Props = {
  onClick: () => void;
};

const HeaderCartButton = ({ onClick }: Props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + Number(item.amount);
  }, 0);

  return (
    <CartButton onClick={onClick}>
      <CartIcon />
      <Badge>{numberOfCartItems}</Badge>
    </CartButton>
  );
};

export default HeaderCartButton;

const CartButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 15px 15px;
`;

const Badge = styled.span`
  background-color: #ee9b0c;
  opacity: 90%;
  padding: 3px 7px;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
  position: absolute;
  bottom: 43px;
  right: 30px;
`;
