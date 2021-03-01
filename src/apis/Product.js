import Api from "../apis/Api";

const ENDPOINT = "products";

export default {
  all() {
    return Api.get(ENDPOINT);
  },
  show(id) {
    return Api.get(`${ENDPOINT}/${id}`);
  }
};
