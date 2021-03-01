<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }} Cart
            </button>
            <div class="mini-cart" @click="$event.stopPropagation()">
              <mini-cart></mini-cart>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MiniCart from "./MiniCart";
export default {
  components: {
    MiniCart
  },
  name: "NavBar",

  computed: {
    ...mapGetters('cart',["cartItemCount"])
  }
};
</script>

<style scoped></style>
