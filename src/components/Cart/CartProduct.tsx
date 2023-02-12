import styled from "styled-components";
import DeleteIcon from "../UI/DeleteIcon";
import GenericButton from "../UI/GenericButton";

type Props = {
  onRemove: () => void;
  onAdd: () => void;
  onDelete: () => void;
  amount: number;
  title: string;
  price: number;
};

const CartProduct = ({
  amount,
  title,
  price,
  onRemove,
  onAdd,
  onDelete,
}: Props) => {
  const priceWithCurrency = `${price} €`;

  return (
    <CartItemConteiner>
      <Title>{title}</Title>
      <Price>{priceWithCurrency}</Price>
      <ActionsWrapper>
        <GenericButton text="-" onClick={onRemove} styled="cart-style" />
        <Amount>{amount}</Amount>
        <GenericButton text="+" onClick={onAdd} styled="cart-style" />
        <DeleteIconWrapper onClick={onDelete}>
          <DeleteIcon />
        </DeleteIconWrapper>
      </ActionsWrapper>
    </CartItemConteiner>
  );
};

export default CartProduct;

const CartItemConteiner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  flex: 2;
  text-align: left;
  margin-left: 30px;
`;

const Price = styled.span`
  flex: 1;
`;

const Amount = styled.div`
  background-color: #eeeeee;
  width: 20%;
  padding: 7px 5px;
  border-radius: 10px;
`;

const ActionsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const DeleteIconWrapper = styled.div`
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
