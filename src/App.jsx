import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import { products } from "./data/ProductDB";
import ProductDetails from "./Pages/ProductDetails";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  // function handleAddCart(product) {
  //   setCart((cart) => [...cart, product]);
  // }

  function handleAddCart(product) {
    setCart((cart) => {
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        return cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...product, quantity: 1 }];
      }
    });
  }

  function handleDeleteCart(id) {
    setCart((cart) => cart.filter((item) => item.id != id));
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} handleDeleteCart={handleDeleteCart} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetails handleAddCart={handleAddCart} />}
        />
      </Routes>
    </div>
  );
}
