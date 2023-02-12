import CartContext from "./cart-context";
import { ReactNode, useReducer } from "react";
import { Product } from "../components/Types";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item: Product) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "DECREASE") {
    const existingCartItemIndex = state.items.findIndex(
      (item: Product) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item: Product) => item.id !== action.id
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item: Product) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    let updatedItems;
    let updatedTotalAmount;
    if (existingItem) {
      updatedItems = state.items.filter(
        (item: Product) => item.id !== action.id
      );
      updatedTotalAmount =
        state.totalAmount - existingItem.price * existingItem.amount;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item: Product) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const decreaseItemsAmountFromCartHandler = (id: number) => {
    dispatchCartAction({ type: "DECREASE", id: id });
  };

  const removeItemFromCartHandler = (id: number) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: decreaseItemsAmountFromCartHandler,
    deleteItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
