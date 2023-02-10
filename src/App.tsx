import { useState } from "react";
import CartProvider from "./store/CartProvider";

import ProductList from "./components/Products/ProductList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

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
      <div style={{ textAlign: "center" }}>
        {cartIsShown && <Cart onClose={() => hideCartHadler()} />}
        <Header onShowCart={() => showCartHandler()} />
        <ProductList />
      </div>
    </CartProvider>
  );
}

export default App;
