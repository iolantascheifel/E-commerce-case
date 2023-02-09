import styled from "styled-components";
import { CartIcon } from "../UI";

const HeaderCartButton = () => {
  return (
    <CartButton>
      <CartIcon />
      <Badge>3</Badge>
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
  opacity: 80%;
  padding: 5px 10px;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 0;
`;
