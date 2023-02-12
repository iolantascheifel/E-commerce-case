import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import SingleProductAmountInput from "./SingleProductAmountInput";

type Props = {
  key: number;
  id: number;
  price: number;
  title: string;
  images: string[];
};

const SingleProduct = ({ id, price, title, images }: Props) => {
  const cartCtx = useContext(CartContext);
  const priceTag = `${price} €`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: amount,
      price: price,
    });
  };

  return (
    <ProductCard>
      <CardImageContainer>
        <Img src={images[0]} alt={title} />
      </CardImageContainer>
      <h4>{title}</h4>
      <PriceTag>{priceTag}</PriceTag>
      <Wrapper>
        <SingleProductAmountInput id={id} onAddToCart={addToCartHandler} />
      </Wrapper>
    </ProductCard>
  );
};

export default SingleProduct;

const ProductCard = styled.div`
  width: 15rem;
  height: 25rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

const CardImageContainer = styled.div`
  flex: 3;
  overflow: hidden;
`;

const Img = styled.img`
  width: auto;
  height: 100%;
`;

const PriceTag = styled.div`
  color: #ee9b0c;
  font-weight: 500;
`;

const Wrapper = styled.div`
  padding: 15px 0;
`;
