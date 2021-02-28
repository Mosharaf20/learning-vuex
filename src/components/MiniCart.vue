<template>
  <div class="dropdown-menu p-4" style="width: 320px;right: 0;left: auto" aria-labelledby="dropdownMenuButton">
    <div class="">
      <div v-for="item in getCart" :key="item.product.id" class="d-flex justify-content-between border-bottom">
        <div class="product-title">
          <h5>{{item.product.title}}</h5>
          <p>{{item.quantity}} x ${{item.product.price}}</p>
        </div>
        <div class="product-remove">
          <button class="badge bg-danger text-white" @click.prevent="removeCartItem(item)">remove</button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <p><b>Total: {{cartItemTotalPrice}}</b></p>
      <div class="clear-cart" v-if="getCart.length">
        <button @click.prevent="clearAllCartItem" class="badge badge-dark">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  computed: {
    getCart() {
      return this.$store.state.cart;
    },

    cartItemTotalPrice() {
      return this.$store.getters.cartItemTotalPrice;
    }
  },
  mounted() {
    this.$store.dispatch("getCartItems");
  },
  methods:{
    removeCartItem(item) {
      return this.$store.dispatch('removeCartItem',item)
    },

    clearAllCartItem(){
      return this.$store.dispatch('clearAllCartItem')

    }
  }
};
</script>

<style scoped></style>
