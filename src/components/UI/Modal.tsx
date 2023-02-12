import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <>
      <Background onClick={onClose} />
      <ModalContent>{children}</ModalContent>
    </>
  );
};

export default Modal;

const Background = styled.div`
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
  left: 15%;
  width: 70%;
  min-height: 50%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
