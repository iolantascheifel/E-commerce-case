import styled from "styled-components";

type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return <GenericButton onClick={onClick}>{text}</GenericButton>;
};

export default Button;

const GenericButton = styled.button`
  cursor: pointer;
`;
