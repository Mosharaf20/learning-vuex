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
    ...mapState("product", ["products"])

    //when not used namespace
    /*...mapState({
      products: state => state.product.products
    })*/

    /*products() {
      return this.$store.state.products;
    }*/
  },
  methods: {
    ...mapActions('product', ["getProducts"]),

    //another way to access modules
    // ...mapActions({
    //   getProducts: 'product/getProducts',
    // })
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped></style>
