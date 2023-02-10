import { useEffect, useState } from "react";
import { Product } from "../../Types";
import SingleProduct from "./SingleProduct";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json().then((data) => data.products);

      setProducts(responseData);
      setIsLoading(false);
    };

    fetchItems().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <p>{isError}</p>
      </section>
    );
  }

  const availableItems = products.map((product) => (
    <SingleProduct
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      //@ts-ignore
      images={product.images}
      product={product}
    />
  ));

  return <div>{availableItems}</div>;
};

export default ProductList;
