import styled from "styled-components";
import { CartIcon } from "../UI";

const HeaderCartButton = () => {
  return (
    <CartButton>
      <CartIcon />
      <span>{}</span>
    </CartButton>
  );
};

export default HeaderCartButton;

const CartButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
