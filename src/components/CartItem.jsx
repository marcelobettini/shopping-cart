import React from 'react';
import PropTypes from 'prop-types';
function CartItem({ item, onRemoveItem }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>${item.totalPrice.toFixed(2)}</td>
      <td onClick={() => onRemoveItem(item.id)}>X</td>
    </tr>


  );
}
CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string, quantity: PropTypes.number, totalPrice: PropTypes.number
  })
};
export default CartItem;