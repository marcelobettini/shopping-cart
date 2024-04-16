import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { initialProduct } from "../services/initialProduct";
import { getAllProducts } from "../services/productService";

export const productsContext = createContext([initialProduct]);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, updateCart] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortedMaxtoMin, setSortedMaxtoMin] = useState(false);
  const [query, setQuery] = useState("");

  const handleSort = () => {
    if (sortedMaxtoMin) {
      const sortedProducts = products.toSorted((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else {
      const sortedProducts = products.toSorted((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    setSortedMaxtoMin(!sortedMaxtoMin);
  };

  const addToCart = (prod) => {
    updateCart((prev) => [...prev, prod]);
  };

  const removeFromCart = (id) => {
    updateCart(cart.filter((p) => p.id !== id));
  };

  const handleMaxPrice = (newMax) => {
    setMaxPrice((prev) => (prev = newMax));
  };

  const handleQuery = (text) => setQuery(text);

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
    <productsContext.Provider
      value={{
        products,
        isLoading,
        error,
        cart,
        maxPrice,
        sortedMaxtoMin,
        query,
        addToCart,
        removeFromCart,
        handleMaxPrice,
        handleSort,
        handleQuery,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
ProductContextProvider.propTypes = {
  children: PropTypes.node,
};
