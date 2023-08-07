import React, { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { initialProduct } from "../services/initialProduct";
import { getAllProducts } from "../services/productService";

export const productsContext = createContext([initialProduct]);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, updateCart] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const addToCart = prod => {
    updateCart(prev => [...prev, prod]);
  };

  const removeFromCart = id => {
    updateCart(cart.filter(p => p.id !== id));

  };
  const handleMinPrice = (newMin) => {
    setMinPrice(prev => prev = newMin);
  };

  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <productsContext.Provider value={{ products, isLoading, error, cart, minPrice, addToCart, removeFromCart, handleMinPrice }}>
      {children}
    </productsContext.Provider>
  );
};
ProductContextProvider.propTypes = {
  children: PropTypes.node
};
