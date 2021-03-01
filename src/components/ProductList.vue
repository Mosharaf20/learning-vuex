<template>
  <div class="d-flex flex-wrap justify-content-between">
    <product-cart
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCart from "./ProductCart";
export default {
  name: "Product",
  components: {
    ProductCart
  },
  computed: {
    ...mapState(["products"])

    /*products() {
      return this.$store.state.products;
    }*/
  },
  methods: {
    ...mapActions(["getProducts"])
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped></style>
