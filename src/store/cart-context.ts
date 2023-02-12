import React from "react";
import { Product } from "../components/Types";

type CartContextType = {
  items: Product[];
  totalAmount: number;
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  deleteItem: (id: number) => void;
};

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  deleteItem: (id) => {},
});

export default CartContext;
