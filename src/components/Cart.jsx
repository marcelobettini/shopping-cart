import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getDerivedCart } from '../utils/getDerivedCart';
import { productsContext } from '../context/ProductsContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';






import { getTotalCartPrice } from '../utils/getTotalCartPrice';
function Cart() {
  const { cart } = useContext(productsContext);
  const derivedCart = getDerivedCart(cart);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {derivedCart?.map((item) => <CartItem key={item.id} item={item} />)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{ textAlign: 'end' }}>total: {getTotalCartPrice(cart)}</td>
          </tr>
        </tfoot>
      </table>
      <Link to={-1}>Volver</Link>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object)
};

export default Cart;