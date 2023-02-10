import React from "react";
import { Product } from "../Types";

type CartContextType = {
  items: Product[];
  totalAmount: number;
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
};

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
