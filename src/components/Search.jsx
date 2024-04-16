import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";

function Search() {
  const { query, handleQuery } = useContext(productsContext);

  return (
    <form>
      <label htmlFor="searchTerm">Search:</label>
      <input
        value={query}
        type="search"
        name="searchTerm"
        id="searchTerm"
        placeholder="jacket, watch, shoes..."
        onChange={(e) => handleQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
