import styled from "styled-components";
import Button from "../UI/Button";

type Props = {
  onClose: () => void;
};

const Cart = ({ onClose }: Props) => {
  const cartProducts = "cart products";

  return (
    <Backdrop onClick={onClose}>
      <ModalContent>
        {cartProducts}
        <TotalAmountContainer>
          <span>Total Amount</span>
          <span>2345</span>
        </TotalAmountContainer>
        <ActionButtons>
          <Button text="Close" onClick={onClose} />
          <Button
            text="Proceed To Order"
            onClick={() => console.log("clicked")}
          />
        </ActionButtons>
      </ModalContent>
    </Backdrop>
  );
};

export default Cart;

const TotalAmountContainer = styled.div``;

const ActionButtons = styled.div``;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalContent = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;
