<template>
  <div class="d-flex flex-wrap justify-content-between">
    <product-cart v-for="product in products"  :product="product" :key="product.id" />
  </div>
</template>

<script>
import ProductCart from "./ProductCart";
export default {
  name: "Product",
  components: {
    ProductCart
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style scoped></style>
