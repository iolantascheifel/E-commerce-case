import styled, { css } from "styled-components";

type ButtonStyle = "normal" | "colored" | "cart-style";

type Props = {
  text: string;
  onClick?: () => void;
  styled?: ButtonStyle;
};

const GenericButton = ({ text, onClick, styled = "normal" }: Props) => {
  return (
    <Button onClick={onClick} $isStyled={styled}>
      {text}
    </Button>
  );
};

export default GenericButton;

const Button = styled.button<{
  $isStyled: ButtonStyle;
}>`
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  font-family: "Poppins", sans-serif;
  transition: all 0.08s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  ${({ $isStyled }) =>
    $isStyled === "colored" &&
    css`
      background-color: #ff752f;
      color: white;
    `}

  ${({ $isStyled }) =>
    $isStyled === "cart-style" &&
    css`
      background-color: #bababa;
      color: white;
      padding: 5px 15px;
      font-size: 20px;
    `}
`;
