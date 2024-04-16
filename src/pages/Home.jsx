import React from "react";

import CartSummary from "../components/CartSummary";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <header className="header">
        <h1 style={{ textAlign: "center" }}>Tienda Fake</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <NavBar />
          <CartSummary />
        </div>
      </header>
      <section>
        <h2>Página principal</h2>
      </section>
    </>
  );
}

export default Home;
