import Cart from "../../../apis/Cart";

export const addToCart = ({ commit }, { product, quantity }) => {
  if (quantity === 0) return;
  commit("ADD_TO_CART", { product, quantity });
  Cart.store({
    product_id: product.id,
    quantity: quantity
  });
};

export const getCartItems = ({ commit }) => {
  Cart.all().then(response => {
    commit("CART_ITEMS", response.data);
  });
};

export const removeCartItem = ({ commit }, item) => {
  commit("REMOVE_CART_ITEM", item.product);
  Cart.destroy(item.id).then(response => {
    console.log(response);
  });
};

export const clearAllCartItem = ({ commit }) => {
  commit("CLEAR_ALL_CART_ITEM");
  Cart.destroyAll().then(response => {
    console.log(response);
  });
};
