import Cart from "../../../apis/Cart";

export const addToCart = ({ commit, dispatch }, { product, quantity }) => {
  if (quantity === 0) return;

  dispatch(
    "addNotification",
    {
      type: "success",
      message: "Product Added to Cart"
    },
    { root: true }
  );

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

export const removeCartItem = ({ commit, dispatch }, item) => {
  commit("REMOVE_CART_ITEM", item.product);
  dispatch(
    "addNotification",
    {
      type: "success",
      message: "Product remove from the Cart"
    },
    { root: true }
  );

  Cart.destroy(item.id).then(response => {
    console.log(response);
  });
};

export const clearAllCartItem = ({ commit, dispatch }) => {
  commit("CLEAR_ALL_CART_ITEM");
  dispatch(
    "addNotification",
    {
      type: "success",
      message: "All Product remove from the Cart"
    },
    { root: true }
  );
  Cart.destroyAll().then(response => {
    console.log(response);
  });
};
