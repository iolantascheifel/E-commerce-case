import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Product } from "../Types";
import styled from "styled-components";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  const [searchProduct, setSearchProduct] = useState("");

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

  const availableItems = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchProduct.toLowerCase())
    )
    .map((product) => (
      <SingleProduct
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        images={product.images as string[]}
      />
    ));

  return (
    <div>
      <SearchInput
        type="text"
        onChange={(event) => {
          setSearchProduct(event.target.value);
        }}
        placeholder="Search products..."
      />
      <ProductsContainer>{availableItems}</ProductsContainer>
    </div>
  );
};

export default ProductList;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  width: 90vw;
  padding-bottom: 50px;
`;

const SearchInput = styled.input`
  margin-top: 130px;
  margin-bottom: 50px;
  padding: 10px;
  width: 280px;
  height: 40px;
  border: 2px solid #ffc82f;
  border-radius: 50px;
  font-size: 16px;
  outline: none;

  ::placeholder {
    font-family: "Poppins", sans-serif;
  }
`;
