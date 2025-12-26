import { useState, useEffect } from "react";
import type { Guitar, CartItem } from "../types";

const useCart = () => {

  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function removeFromCart(id: Guitar['id']) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  }

  function decreaseFromCart(id: Guitar['id']) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    })
    setCart(updatedCart);
  }

  function increseFromCart(id: Guitar['id']) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    })
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }
  
  return {
    cart,
    removeFromCart,
    decreaseFromCart,
    increseFromCart,
    clearCart,
  }
}

export default useCart;