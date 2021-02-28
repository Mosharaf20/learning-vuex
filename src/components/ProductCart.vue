<template>
  <div class="card m-3" style="width: 18rem;">
    <img class="card-img-top" src="https://dummyimage.com/320x200/000/fff" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="{name:'product',params:{id:23}}">Product title</router-link>
      </h5>
      <b>$25</b>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCart"
};
</script>

<style scoped></style>
