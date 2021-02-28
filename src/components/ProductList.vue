<template>
  <div class="d-flex flex-wrap justify-content-between">
    <product-cart />
    <product-cart />
    <product-cart />
    <product-cart />
    <product-cart />
    <product-cart />
    <product-cart />
  </div>
</template>

<script>
import ProductCart from "./ProductCart";
export default {
  components: {
    ProductCart
  },
  name: "Product"
};
</script>

<style scoped></style>
