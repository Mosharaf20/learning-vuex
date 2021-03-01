<template>
  <div class="card m-3" style="width: 18rem;">
    <img
      class="card-img-top"
      style="height: 200px"
      :src="product.image"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="{ name: 'product', params: { id: product.id } }">{{
          product.title
        }}</router-link>
      </h5>
      <b>${{ product.price }}</b>
      <p class="card-text">{{ product.description }}</p>
      <a href="#" class="btn btn-primary" @click.prevent="addCart"
        >Add To Cart</a
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductCart",
  props: ["product"],
  methods: {
    ...mapActions('cart',["addToCart"]),
    addCart() {
      this.addToCart({
        product: this.product,
        quantity: 1
      });
    }

    /* addToCart() {
      this.$store.dispatch("addToCart", {
        product: this.product,
        quantity: 1
      });
    }*/
  }
};
</script>

<style scoped></style>
