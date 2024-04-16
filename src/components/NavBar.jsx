import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{ display: "flex", justifyContent: "center", columnGap: "1em" }}
    >
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
    </nav>
  );
}

export default NavBar;
