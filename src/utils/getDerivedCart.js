export const getDerivedCart = cart => {
  const derivedCart = [];
  //iterate over each item in the cart
  cart.forEach(item => {
    const existingItem = derivedCart.find(dItem => dItem.id === item.id);
    if (existingItem) {
      //if the item exists, update it's qtty and totalPrice props
      existingItem.quantity++;
      existingItem.totalPrice += item.price;
    } else {
      //if the item doesn't exist, push it to derived cart
      derivedCart.push({
        id: item.id,
        name: item.title,
        quantity: 1,
        totalPrice: item.price,
      });
    }
  });
  return derivedCart;
};
