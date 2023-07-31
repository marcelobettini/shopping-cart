import React, { useContext } from 'react';
import { productsContext } from '../context/ProductsContext';

function FilterByPrice() {
  const { minPrice, handleMinPrice } = useContext(productsContext);
  return (
    <div><input type="range" name="maxPrice" id="maxPrice" min={0} max={999} step={10} defaultValue={0} onChange={(e) => handleMinPrice(+e.target.value)} /> <span>Min Price ${minPrice}</span></div>
  );
}

export default FilterByPrice;