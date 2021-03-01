import Api from "../apis/Api";

const ENDPOINT = "carts";

export default {
  all() {
    return Api.get(ENDPOINT);
  },
  store(data) {
    return Api.post(ENDPOINT, data);
  },
  destroy(id) {
    return Api.delete(`${ENDPOINT}/${id}`);
  },
  destroyAll() {
    return Api.delete(ENDPOINT);
  }
};
