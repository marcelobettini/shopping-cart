import Product from "../components/Product";
import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import NavBar from "../components/NavBar";
import CartSummary from "../components/CartSummary";
import FilterByPrice from "../components/FilterByPrice";
import Sort from "../components/Sort";
import Search from "../components/Search";

const ProductsList = () => {
  const { products, isLoading, error, maxPrice, query } =
    useContext(productsContext);

  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  if (error)
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  return (
    products?.length && (
      <>
        <header style={{ height: "110px" }}>
          <h1 style={{ textAlign: "center" }}>Tienda Fake</h1>
          <NavBar />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2em",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "1em",
              }}
            >
              <FilterByPrice />
              <Sort />
              <Search />
            </div>
            <CartSummary />
          </div>
        </header>
        <main className="container">
          {products
            .filter(
              (p) =>
                p.price <= maxPrice &&
                p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
            .map((prod) => (
              <Product key={prod.id} prod={prod} />
            ))}
        </main>
      </>
    )
  );
};

export default ProductsList;
