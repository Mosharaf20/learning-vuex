<template>
  <div class="dropdown-menu p-4" style="width: 320px;right: 0;left: auto" aria-labelledby="dropdownMenuButton">
    <div class="d-flex justify-content-between">
      <div class="product-title">
        <h5>Product Title</h5>
        <p>1 x $42</p>
      </div>
      <div class="product-remove">
        <button class="badge bg-danger text-white">remove</button>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
      <p><b>Total:</b> $23</p>
      <div class="clear-cart">
        <button class="badge badge-dark">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart"
};
</script>

<style scoped></style>
