<template>
  <div class="row m-3">
   <div class="col-4">
     <img class="card-img-top" src="https://dummyimage.com/320x200/000/fff" alt="Card image cap">
   </div>
    <div class="col-">
      <div class="card-body">
        <h5 class="card-title">Product title {{id}}</h5>
        <b>$25</b>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <input class="mr-2" type="text" style="width: 40px">
        <a href="#" class="btn btn-primary">Add To Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props:['id']
};
</script>

<style scoped></style>
