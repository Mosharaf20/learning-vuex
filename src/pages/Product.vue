<template>
  <div class="row m-3" v-if="product">
    <div class="col-4">
      <img
        class="card-img-top"
        style="height: 300px;"
        :src="product.image"
        alt="Card image cap"
      />
    </div>
    <div class="col-7">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <b>${{ product.price }}</b>
        <p class="card-text">
          {{ product.description }}
        </p>
        <input
          v-model="quantity"
          class="mr-2"
          type="number"
          style="width: 40px"
        />
        <a href="#" @click.prevent="addCart" class="btn btn-primary"
          >Add To Cart</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Product",
  props: ["id"],
  data() {
    return {
      quantity: 1
    };
  },

  computed: {
    ...mapState(["product"])
    /*product() {
      return this.$store.state.product;
    }*/
  },

  mounted() {
    this.getProduct(this.id);
    // this.$store.dispatch("getProduct", this.id);
  },

  methods: {
    ...mapActions("cart", ["addToCart", "getProduct"]),

    addCart() {
      this.addToCart({
        product: this.product,
        quantity: this.quantity
      });
    }
    /*addToCart(product) {
      this.$store.dispatch("addToCart", {
        product: product,
        quantity: this.quantity
      });
    }*/
  }
};
</script>

<style scoped></style>
