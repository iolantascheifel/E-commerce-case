import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";

type Props = {
  onShowCart: () => void;
};

const Header = ({ onShowCart }: Props) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <BoldName>OUTLETt</BoldName>
        <SubText>of random things</SubText>
      </TitleContainer>
      <HeaderCartButton onClick={onShowCart} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #ffc82f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const TitleContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoldName = styled.h1`
  font-family: LegoFont;
  font-size: 46px;
`;

const SubText = styled.h1`
  font-size: 15px;
`;
