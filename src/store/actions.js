import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("http://127.0.0.1:8000/api/products").then(response => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios
    .get(`http://127.0.0.1:8000/api/products/${productId}`)
    .then(response => {
      commit("SET_PRODUCT", response.data);
    });
};

export const addToCart = ({ commit }, { product, quantity }) => {
  if (quantity === 0) return;
  commit("ADD_TO_CART", { product, quantity });
  axios.post("http://127.0.0.1:8000/api/carts", {
    product_id: product.id,
    quantity: quantity
  });
};

export const getCartItems = ({ commit }) => {
  axios.get("http://127.0.0.1:8000/api/carts").then(response => {
    commit("CART_ITEMS", response.data);
  });
};

export const removeCartItem = ({ commit }, item) => {
  commit("REMOVE_CART_ITEM", item.product);
  axios.delete(`http://127.0.0.1:8000/api/carts/${item.id}`).then(response => {
    console.log(response);
  });
};

export const clearAllCartItem = ({commit}) => {
  commit("CLEAR_ALL_CART_ITEM");
  axios.delete("http://127.0.0.1:8000/api/carts").then(response => {
    console.log(response);
  });
};
