<template>
  <div class="notification-list">
    <notification-message v-for="notification in notifications" :key="notification.id" :notification="notification"/>
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage";
import { mapState } from "vuex";
export default {
  name: "NotificationsList",
  components: {
    NotificationMessage
  },
  computed: {
    ...mapState(["notifications"])
  }
};
</script>

<style scoped>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 320px;
}
</style>
