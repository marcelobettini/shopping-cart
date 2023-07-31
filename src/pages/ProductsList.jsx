import Product from '../components/Product';
import React, { useContext } from 'react';
import { productsContext } from '../context/ProductsContext';
import NavBar from '../components/NavBar';
import CartSummary from '../components/CartSummary';
import FilterByPrice from '../components/FilterByPrice';

const ProductsList = () => {
  const { products, isLoading, error, minPrice } = useContext(productsContext);

  if (isLoading) return <div><h2>Loading...</h2></div>;
  if (error) return <div><h2>{error}</h2></div>;
  return products?.length && (
    <>
      <header className='header'>
        <h1>Tienda Fake</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavBar />
          <FilterByPrice />
          <CartSummary />
        </div>
      </header>
      <main className='container'>
        {products.filter(p => p.price > minPrice).map((prod) => <Product key={prod.id} prod={prod} />)}
      </main>
    </>
  );
};

export default ProductsList;