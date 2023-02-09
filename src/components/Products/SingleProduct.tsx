import Button from "../UI/Button";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

const SingleProduct = ({ title, price, images }: Props) => {
  const priceTag = `${price} €`;

  return (
    <div>
      <div>{title}</div>
      <div>{priceTag}</div>
      <img src={images[0]} alt={title} />
      <Button text="+ Add" onClick={() => console.log("clicked")} />
    </div>
  );
};

export default SingleProduct;
