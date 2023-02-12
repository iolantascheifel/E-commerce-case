import { useState } from "react";
import CartProvider from "./store/CartProvider";

import ProductList from "./components/Products/ProductList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

import "./App.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHadler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <div className="App">
        {cartIsShown && <Cart onClose={() => hideCartHadler()} />}
        <Header onShowCart={() => showCartHandler()} />
        <ProductList />
      </div>
    </CartProvider>
  );
}

export default App;
