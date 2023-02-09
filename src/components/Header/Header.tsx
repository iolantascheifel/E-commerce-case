import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";

type Props = {
  onShowCart: () => void;
};

const Header = ({ onShowCart }: Props) => {
  return (
    <HeaderContainer>
      <div>Outlet store</div>
      <HeaderCartButton onClick={() => onShowCart()} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 5rem;
  background-color: #fed42f;
  color: rgb(55, 55, 55);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;
