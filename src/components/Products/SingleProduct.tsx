import Button from "../UI/Button";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

const SingleProduct = ({ title, price, images }: Props) => {
  return (
    <div>
      {title}
      {price}
      <img src={images[0]} alt={title} />
      <Button text="Add to cart" />
    </div>
  );
};

export default SingleProduct;
