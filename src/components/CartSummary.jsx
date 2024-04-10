import { MdShoppingCart } from "react-icons/md";

import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { getTotalCartPrice } from "../utils/getTotalCartPrice";
import { Link } from "react-router-dom";
function CartSummary() {
  const { cart } = useContext(productsContext);
  return cart?.length ? (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <MdShoppingCart /> $ {getTotalCartPrice(cart)}
    </Link>
  ) : (
    <p>No items in cart</p>
  );
}

export default CartSummary;
