import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";

function FilterByPrice() {
  const { maxPrice, handleMaxPrice } = useContext(productsContext);
  return (
    <div>
      <input
        style={{ accentColor: "black" }}
        type="range"
        name="maxPrice"
        id="maxPrice"
        min={0}
        max={1000}
        step={5}
        defaultValue={1000}
        onChange={(e) => handleMaxPrice(+e.target.value)}
      />{" "}
      <p style={{ textAlign: "center" }}>Top price: ${maxPrice}</p>
    </div>
  );
}

export default FilterByPrice;
