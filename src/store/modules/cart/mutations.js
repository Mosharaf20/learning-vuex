export const ADD_TO_CART = (state, { product, quantity }) => {
  const cartInProduct = state.cart.find(function(item) {
    return item.product.id === product.id;
  });

  if (cartInProduct) {
    return (cartInProduct.quantity += parseInt(quantity));
  }

  state.cart.push({
    product,
    quantity
  });
};

export const CART_ITEMS = (state, cartItems) => {
  state.cart = cartItems;
};

export const REMOVE_CART_ITEM = (state, product) => {
  state.cart = state.cart.filter(item => {
    return item.product.id !== product.id;
  });
};

export const CLEAR_ALL_CART_ITEM = state => {
  state.cart = [];
};
