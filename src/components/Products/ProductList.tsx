import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

const ProductList = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json().then((data) => data.products);

      console.log(responseData);

      setProducts(responseData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
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

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <SingleProduct
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            images={product.images}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
