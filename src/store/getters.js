export const cartItemCount = state => {
  return state.cart.length;
};

export const cartItemTotalPrice = state => {
  let total = 0;

  state.cart.forEach(item => {
    total += item.product.price * item.quantity;
  });

  return total;
};
