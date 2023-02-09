import { useState } from "react";
import "./App.css";
import ProductList from "./components/Products/ProductList";
import Header from "./components/Header/Header";
import Cart from "./components/pages/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHadler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      {cartIsShown && <Cart onClose={() => hideCartHadler()} />}
      <Header onShowCart={() => showCartHandler()} />
      <ProductList />
    </div>
  );
}

export default App;
