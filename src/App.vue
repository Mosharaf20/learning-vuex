<template>
  <div id="app">
    <nav-bar />
    <router-view></router-view>

    <notifications-list />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import NotificationsList from "./components/NotificationsList";
export default {
  name: "App",
  components: {
    NavBar,
    NotificationsList
  }
};
</script>

<style></style>
