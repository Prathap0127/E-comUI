import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
//use to get the data from the user cart products

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) {
      setCart(JSON.parse(existingCartItem));
    }
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {/* passing the cart product data to entire page in the project */}
      {children}
    </CartContext.Provider>
  );
};

//create custom hook for context

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
