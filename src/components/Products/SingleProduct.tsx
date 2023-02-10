import { useContext } from "react";
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
    <li>
      <div>
        <h3>{title}</h3>
      </div>
      <img src={images[0]} alt={title} />
      <div>{priceTag}</div>
      <div>
        <SingleProductAmountInput id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default SingleProduct;
